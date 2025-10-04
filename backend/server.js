const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const tripRoutes = require("./routes/tripRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/trips", tripRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => console.log(`Server running on http://localhost:${process.env.PORT || 5000}`));
  })
  .catch(err => console.error(err));
