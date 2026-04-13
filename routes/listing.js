const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// index route GET /listings
router.get("/", async (req, res) => {
  let allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// new and create route GET /listings/new  POST /listings
// new route GET /listings/new
router.get("/new", (req, res) => {
  if(req.isAuthenticated()) {
    res.render("listings/new.ejs");
  } else {
    req.flash("error", "Login Required.");
    res.redirect("/login")
  }
});

// create route POST /listings
router.post("/", validateListing, async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
});

// edit and update route GET /listings/:id/edit PUT /listing/:id
// edit route GET /listings/:id/edit
router.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/edit.ejs", { listing });
  }
});

// update route PUT /listings/:id
router.put("/:id", validateListing, async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
});

// show route GET /listings/:id
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id).populate("reviews");
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
});

// delete route DELETE /listings/:id
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
});


module.exports = router;