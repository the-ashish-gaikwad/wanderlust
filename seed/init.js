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
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop",
    },
    price: 4100,
    location: "Dubai",
    country: "UAE",
    categories: ["Iconic cities", "Rooms"],
  },
  {
    title: "Desert Camp Stay",
    description: "Traditional tents and starry night sky.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop",
    },
    price: 2100,
    location: "Marrakech",
    country: "Morocco",
    categories: ["Camping", "Trending"],
  },
  {
    title: "Tea Garden Cottage",
    description: "Peaceful stay surrounded by tea estates.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop",
    },
    price: 2800,
    location: "Munnar",
    country: "India",
    categories: ["Farms", "Breathtaking"],
  },
  {
    title: "Lakefront Bungalow",
    description: "Private bungalow with direct lake access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop",
    },
    price: 5300,
    location: "Lucerne",
    country: "Switzerland",
    categories: ["Breathtaking", "Rooms"],
  },
  {
    title: "Old Town Heritage Home",
    description: "Restored home with classic architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop",
    },
    price: 3600,
    location: "Jaipur",
    country: "India",
    categories: ["Castles", "International"],
  },
  {
    title: "Backwater Houseboat",
    description: "Floating stay with traditional Kerala meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop",
    },
    price: 6200,
    location: "Alleppey",
    country: "India",
    categories: ["Ferry", "Trending"],
  },
  {
    title: "Hilltop Glass House",
    description: "Panoramic valley views from every room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop",
    },
    price: 7000,
    location: "Queenstown",
    country: "New Zealand",
    categories: ["Mountains", "Breathtaking"],
  },
  {
    title: "Riverside Campsite",
    description: "Adventure stay near rafting point.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1170&auto=format&fit=crop",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    categories: ["Sports", "Camping"],
  },
  {
    title: "Beach Shack Deluxe",
    description: "Colorful shack just steps from the shore.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1170&auto=format&fit=crop",
    },
    price: 3400,
    location: "Bali",
    country: "Indonesia",
    categories: ["Beach", "Trending"],
  },
  {
    title: "Snowline Chalet",
    description: "Warm wooden interiors and snowy peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1170&auto=format&fit=crop",
    },
    price: 5600,
    location: "Auli",
    country: "India",
    categories: ["Skiing", "Mountains"],
  },
  {
    title: "Colonial Courtyard Stay",
    description: "Elegant rooms around a green courtyard.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1170&auto=format&fit=crop",
    },
    price: 3900,
    location: "Lisbon",
    country: "Portugal",
    categories: ["International", "Iconic cities"],
  },
  {
    title: "Seaside Cliff Villa",
    description: "Luxury villa with sunset deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop",
    },
    price: 8200,
    location: "Santorini",
    country: "Greece",
    categories: ["Breathtaking", "Beach"],
  },
  {
    title: "Valley View Homestay",
    description: "Friendly host and fresh local breakfast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170&auto=format&fit=crop",
    },
    price: 2400,
    location: "Coorg",
    country: "India",
    categories: ["Farms", "Mountains"],
  },
  {
    title: "Fortside Haveli",
    description: "Royal decor near historic fort walls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop",
    },
    price: 4700,
    location: "Jodhpur",
    country: "India",
    categories: ["Castles", "Trending"],
  },
  {
    title: "Island Palm Cottage",
    description: "Quiet island cottage with sea breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop",
    },
    price: 5100,
    location: "Male",
    country: "Maldives",
    categories: ["Beach", "Breathtaking"],
  },
  {
    title: "Garden Studio Loft",
    description: "Compact loft with private garden patio.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170&auto=format&fit=crop",
    },
    price: 2700,
    location: "Bengaluru",
    country: "India",
    categories: ["Rooms", "Trending"],
  },
  {
    title: "Temple Town Inn",
    description: "Simple and clean rooms near landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1170&auto=format&fit=crop",
    },
    price: 1900,
    location: "Kyoto",
    country: "Japan",
    categories: ["International", "Rooms"],
  },
  {
    title: "Harbor View Suite",
    description: "Top-floor suite with marina panorama.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f?q=80&w=1170&auto=format&fit=crop",
    },
    price: 6000,
    location: "Sydney",
    country: "Australia",
    categories: ["Iconic cities", "Beach"],
  },
  {
    title: "Rainforest Eco Lodge",
    description: "Sustainable stay deep in lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1170&auto=format&fit=crop",
    },
    price: 3300,
    location: "Monteverde",
    country: "Costa Rica",
    categories: ["Camping", "Farms"],
  },
  {
    title: "Sunset Dune Resort",
    description: "Resort rooms opening to golden dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1170&auto=format&fit=crop",
    },
    price: 4500,
    location: "Doha",
    country: "Qatar",
    categories: ["Trending", "International"],
  },
];

const coordinatesByPlace = {
  "Dubai|UAE": [55.2708, 25.2048],
  "Marrakech|Morocco": [-7.9811, 31.6295],
  "Munnar|India": [77.0595, 10.0889],
  "Lucerne|Switzerland": [8.3093, 47.0502],
  "Jaipur|India": [75.7873, 26.9124],
  "Alleppey|India": [76.3388, 9.4981],
  "Queenstown|New Zealand": [168.6626, -45.0312],
  "Rishikesh|India": [78.2676, 30.0869],
  "Bali|Indonesia": [115.1889, -8.4095],
  "Auli|India": [79.5699, 30.5284],
  "Lisbon|Portugal": [-9.1393, 38.7223],
  "Santorini|Greece": [25.4615, 36.3932],
  "Coorg|India": [75.8069, 12.3375],
  "Jodhpur|India": [73.0243, 26.2389],
  "Male|Maldives": [73.5093, 4.1755],
  "Bengaluru|India": [77.5946, 12.9716],
  "Kyoto|Japan": [135.7681, 35.0116],
  "Sydney|Australia": [151.2093, -33.8688],
  "Monteverde|Costa Rica": [-84.825, 10.3009],
  "Doha|Qatar": [51.531, 25.2854],
};

const initDB = async () => {
  await Listing.deleteMany({});
  initData = initData?.map((obj) => {
    const key = `${obj.location}|${obj.country}`;
    const coordinates = coordinatesByPlace[key];

    if (!coordinates) {
      throw new Error(`Missing coordinates for ${key}`);
    }

    return {
      ...obj,
      owner: "69dd2186ff5566a29a055270",
      geometry: {
        type: "Point",
        coordinates,
      },
    };
  });
  await Listing.insertMany(initData);
  console.log("data was initialized");
};

initDB();
