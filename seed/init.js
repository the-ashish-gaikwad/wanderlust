const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

let initData = [
  {
    title: "City Lights Apartment",
    description: "Modern apartment in the heart of downtown.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop",
    price: 4100,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Desert Camp Stay",
    description: "Traditional tents and starry night sky.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop",
    price: 2100,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Tea Garden Cottage",
    description: "Peaceful stay surrounded by tea estates.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop",
    price: 2800,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Lakefront Bungalow",
    description: "Private bungalow with direct lake access.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
    price: 5300,
    location: "Lucerne",
    country: "Switzerland",
  },
  {
    title: "Old Town Heritage Home",
    description: "Restored home with classic architecture.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop",
    price: 3600,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Backwater Houseboat",
    description: "Floating stay with traditional Kerala meals.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop",
    price: 6200,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Hilltop Glass House",
    description: "Panoramic valley views from every room.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop",
    price: 7000,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Riverside Campsite",
    description: "Adventure stay near rafting point.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1170&auto=format&fit=crop",
    price: 1800,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Beach Shack Deluxe",
    description: "Colorful shack just steps from the shore.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1170&auto=format&fit=crop",
    price: 3400,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Snowline Chalet",
    description: "Warm wooden interiors and snowy peaks.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1170&auto=format&fit=crop",
    price: 5600,
    location: "Auli",
    country: "India",
  },
  {
    title: "Colonial Courtyard Stay",
    description: "Elegant rooms around a green courtyard.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1170&auto=format&fit=crop",
    price: 3900,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Seaside Cliff Villa",
    description: "Luxury villa with sunset deck.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop",
    price: 8200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Valley View Homestay",
    description: "Friendly host and fresh local breakfast.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170&auto=format&fit=crop",
    price: 2400,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Fortside Haveli",
    description: "Royal decor near historic fort walls.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop",
    price: 4700,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Island Palm Cottage",
    description: "Quiet island cottage with sea breeze.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop",
    price: 5100,
    location: "Male",
    country: "Maldives",
  },
  {
    title: "Garden Studio Loft",
    description: "Compact loft with private garden patio.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170&auto=format&fit=crop",
    price: 2700,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Temple Town Inn",
    description: "Simple and clean rooms near landmarks.",
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1170&auto=format&fit=crop",
    price: 1900,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Harbor View Suite",
    description: "Top-floor suite with marina panorama.",
    image:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?q=80&w=1170&auto=format&fit=crop",
    price: 6000,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Rainforest Eco Lodge",
    description: "Sustainable stay deep in lush greenery.",
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1170&auto=format&fit=crop",
    price: 3300,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Sunset Dune Resort",
    description: "Resort rooms opening to golden dunes.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1170&auto=format&fit=crop",
    price: 4500,
    location: "Doha",
    country: "Qatar",
  },
];

const initDB = async () => {
  await Listing.deleteMany({});
  initData = initData?.map((obj) =>( {
    ...obj,
    owner: "69dd2186ff5566a29a055270"
  }));
  await Listing.insertMany(initData);
  console.log("sata was initialized");
}

initDB();
