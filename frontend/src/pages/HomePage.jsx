import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/trips");
      setTrips(res.data);
    } catch (err) {
      console.error("Failed to fetch trips:", err);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this trip?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:5000/api/trips/${id}`);
      fetchTrips(); // refresh after deletion
    } catch (err) {
      console.error("Failed to delete trip:", err);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Your Trips</h1>
      {trips.length === 0 ? (
        <div className="alert alert-info">No trips added yet.</div>
      ) : (
        <div className="row">
          {trips.map(t => (
            <div className="col-md-4 mb-3" key={t._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{t.name}</h5>
                  <p className="card-text">Budget: ₹{t.budget}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/trip/${t._id}`} className="btn btn-primary btn-sm">
                      View
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(t._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
