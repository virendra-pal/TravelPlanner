# 🌍 Travel Planner — MERN Stack Project

A full-stack **Travel Planner** application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
Users can create, view, update, and delete trips. Each trip includes a budget and checklist, making trip planning simple and organized.

---

## 📽️ Project Demo

🎥 **Video Walkthrough:** [Click to Watch](https://drive.google.com/file/d/1CB1jdoWNtay7-uDb_MuU5L1sIO-TnA34/view?usp=sharing)

---

## 🚀 Features

- ➕ Create new trips with name and budget  
- 📋 Add and view checklist items for each trip  
- 📝 Update trip details  
- 🗑️ Delete trips  
- 🧭 Modern UI with **Bootstrap** styling  
- 🌐 RESTful backend API with MongoDB database

---

## 🧠 Tech Stack

**Frontend:**  
- React.js  
- Axios  
- React Router DOM  
- Bootstrap 5

**Backend:**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- CORS + dotenv

---

## 🗂️ Folder Structure

travel-planner/
├── frontend/ # React Frontend
│ ├── public/
│ └── src/
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── AddTripPage.jsx
│ │ └── TripPage.jsx
│ ├── App.js
│ └── index.js
│
├── backend/ # Node.js + Express Backend
│ ├── controllers/
│ │ └── tripController.js
│ ├── models/
│ │ └── Trip.js
│ ├── routes/
│ │ └── tripRoutes.js
│ ├── server.js
│ └── .env

