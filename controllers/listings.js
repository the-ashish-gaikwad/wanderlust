const Listing = require("../models/listing.js");
const { geocoding, config } = require("@maptiler/client");
const mapKey = process.env.MAPTILER_API_KEY;
config.apiKey = mapKey;

async function getCoordinates(query) {
  try {
    const result = await geocoding.forward(query, {
      language: ["en"],
      limit: 1, // max results
    });
    if (result.features.length > 0) {
      const place = result.features[0];
      return place.geometry;
    }
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
  }
}

module.exports.index = async (req, res) => {
  let country = req.query.country;
  let category = req.query.category || "";
  if (country !== undefined) {
    let allListings = await Listing.find({
      country: { $regex: `^${country.trim()}$`, $options: "i" },
    });
    if (allListings.length !== 0) {
      return res.render("./listings/index.ejs", { allListings, category });
    } else {
      req.flash("error", `Not available.`);
      return res.redirect("/listings");
    }
  }
  if (category !== "") {
    let allListings = await Listing.find({ categories: category });
    if (allListings.length !== 0) {
      return res.render("./listings/index.ejs", {
        allListings,
        category,
      });
    } else {
      req.flash("error", `Not available.`);
      return res.redirect("/listings");
    }
  }
  let allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings, category });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  const geometry = await getCoordinates(
    `${newListing.location}, ${newListing.country}`,
  );
  if (geometry) {
    newListing.geometry = geometry;
  }
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};

module.exports.destoryListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
