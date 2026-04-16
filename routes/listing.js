const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(listingController.index) // index route GET /listings
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    listingController.createListing,
  ); // create route POST /listings

router.get("/new", isLoggedIn, listingController.renderNewForm); // new route GET /listings/new

router
  .route("/:id")
  .get(listingController.showListing) // show route GET /listings/:id
  .put(
    validateListing,
    isOwner,
    isLoggedIn,
    upload.single("listing[image]"),
    listingController.updateListing,
  ) // update route PUT /listings/:id
  .delete(isLoggedIn, isOwner, listingController.destoryListing); // delete route DELETE /listings/:id

router.get("/:id/edit", isLoggedIn, listingController.renderEditForm); // edit route GET /listings/:id/edit

module.exports = router;
