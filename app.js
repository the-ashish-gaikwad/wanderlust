const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
require("dotenv").config();
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema } = require("./schema.js");
const app = express();
const PORT = process.env.PORT || 8080;

main()
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("HOME");
});

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ")
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// index route GET /listings
app.get(
  "/listings",
  async (req, res) => {
    let allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
  },
);

// new and create route GET /listings/new  POST /listings
// new route GET /listings/new
app.get("/listings/new", (req, res) => {
  res.render("new.ejs");
});

// create route POST /listings
app.post(
  "/listings",
  validateListing,
  async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  },
);

// edit and update route GET /listings/:id/edit PUT /listing/:id
// edit route GET /listings/:id/edit
app.get(
  "/listings/:id/edit",
  async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("edit.ejs", { listing });
  },
);

// update route PUT /listings/:id
app.put(
  "/listings/:id",
  validateListing,
  async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  },
);

// show route GET /listings/:id
app.get(
  "/listings/:id",
  async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("show.ejs", { listing });
  },
);

// delete route DELETE /listings/:id
app.delete(
  "/listings/:id",
  async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  },
);

app.use("/*path", (req, res, next) => {
  next(new ExpressError(404, "page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { err });
});

app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}/`);
});
