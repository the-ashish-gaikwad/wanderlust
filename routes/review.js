const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// reviews create route POST /listings/:id/reviews
router.post("/", isLoggedIn, validateReview, reviewController.createReview);

// review delete route DELETE /listings/:listingId/reviews/:reviewId
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, reviewController.destoryReview);

module.exports = router;
