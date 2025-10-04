const express = require("express");
const { getTrips, getTripById, createTrip } = require("../controllers/tripController.js");
const Trip = require("../models/Trip.js");

const router = express.Router();

// Get all trips
router.get("/", getTrips);

// Get trip by ID
router.get("/:id", getTripById);

// Create new trip
router.post("/", createTrip);

// Update trip (e.g., checklist updates)
router.put("/:id", async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(trip);
  } catch (error) {
    res.status(400).json({ message: "Failed to update trip", error: error.message });
  }
});

// Delete trip
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete trip", error: error.message });
  }
});

module.exports = router;
