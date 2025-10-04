import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TripPage() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/trips/${id}`)
      .then(res => setTrip(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const addChecklistItem = async e => {
    e.preventDefault();
    if (!item.trim()) return;
    const updated = { ...trip, checklist: [...trip.checklist, item] };
    await axios.put(`http://localhost:5000/api/trips/${id}`, updated);
    setTrip(updated);
    setItem("");
  };

  if (!trip) return <div>Loading...</div>;

  return (
    <div>
      <div className="card shadow p-4 mb-3">
        <h2>{trip.name}</h2>
        <p className="text-muted">Budget: ₹{trip.budget}</p>
      </div>

      <div className="card shadow p-4">
        <h4>Checklist</h4>
        <form className="d-flex mb-3" onSubmit={addChecklistItem}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add checklist item"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>

        {trip.checklist.length === 0 ? (
          <div className="alert alert-secondary">No checklist items.</div>
        ) : (
          <ul className="list-group">
            {trip.checklist.map((c, i) => (
              <li className="list-group-item" key={i}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
