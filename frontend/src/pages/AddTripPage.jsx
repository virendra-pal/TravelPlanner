import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTripPage() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/trips", {
      name: name.trim(),
      budget: Number(budget)
    });
    navigate("/");
  }

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Trip Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Budget (₹)</label>
          <input
            type="number"
            className="form-control"
            value={budget}
            onChange={e => setBudget(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Create Trip</button>
      </form>
    </div>
  );
}
