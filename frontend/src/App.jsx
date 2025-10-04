import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TripPage from "./pages/TripPage";
import AddTripPage from "./pages/AddTripPage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Travel Planner</Link>
          <div>
            <Link className="btn btn-light btn-sm" to="/add-trip">+ Add Trip</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trip/:id" element={<TripPage />} />
          <Route path="/add-trip" element={<AddTripPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
