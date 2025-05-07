// seed.js
const mongoose = require("mongoose");
require("dotenv").config();
const Activity = require("./models/Activity"); // Adjust the path as needed

const MONGO_URI = process.env.MONGO_URI;

const activities = [
  {
    name: "Trekking Adventure",
    description: "Explore scenic mountain trails with experienced guides.",
    location: "Manali, India",
    date: "2025-06-10",
    capacity: 20,
    price: 1500
  },
  {
    name: "Scuba Diving",
    description: "Dive into the deep blue waters and explore marine life.",
    location: "Goa, India",
    date: "2025-07-01",
    capacity: 10,
    price: 3000
  },
  {
    name: "Photography Workshop",
    description: "Hands-on learning with professional photographers.",
    location: "Mumbai, India",
    date: "2025-06-15",
    capacity: 25,
    price: 1000
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    await Activity.deleteMany();
    console.log("Cleared existing activities");

    await Activity.insertMany(activities);
    console.log("Seed data inserted");

    process.exit();
  } catch (err) {
    console.error("Seeding failed", err);
    process.exit(1);
  }
};

seedDB();
