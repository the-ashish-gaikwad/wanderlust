const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const CATEGORY_ENUM = [
  "Trending",
  "Rooms",
  "Farms",
  "Beach",
  "Breathtaking",
  "Iconic cities",
  "Ferry",
  "Cabins",
  "Sports",
  "Pools",
  "Skiing",
  "International",
  "E-sports",
  "Mountains",
  "Castles",
  "Camping",
];

const listing = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  categories: {
    type: [
      {
        type: String,
        enum: CATEGORY_ENUM,
      },
    ],
    default: ["Trending"],
    validate: {
      validator: (value) => Array.isArray(value) && value.length > 0,
      message: "At least one category is required",
    },
  },
});

listing.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listing);
module.exports = Listing;
