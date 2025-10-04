const Trip = require("../models/Trip.js");

// GET all trips
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trips", error: error.message });
  }
};

// GET trip by ID
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trip", error: error.message });
  }
};

// CREATE new trip
const createTrip = async (req, res) => {
  try {
    console.log("Incoming trip body:", req.body);
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(400).json({ message: "Failed to create trip", error: error.message });
  }
};

module.exports = {
  getTrips,
  getTripById,
  createTrip,
};