const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// index route GET /listings
router.get("/", listingController.index);

// new and create route GET /listings/new  POST /listings
// new route GET /listings/new
router.get("/new", isLoggedIn, listingController.renderNewForm);

// create route POST /listings
router.post("/", validateListing, listingController.createListing);

// edit and update route GET /listings/:id/edit PUT /listing/:id
// edit route GET /listings/:id/edit
router.get("/:id/edit", isLoggedIn, listingController.renderEditForm);

// update route PUT /listings/:id
router.put("/:id", validateListing, isOwner, listingController.updateListing);

// show route GET /listings/:id
router.get("/:id", listingController.showListing);

// delete route DELETE /listings/:id
router.delete("/:id", isLoggedIn, isOwner, listingController.destoryListing);

module.exports = router;
