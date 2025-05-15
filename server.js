// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Import routes
const contactRoutes = require("./Routes/contact");
const projectRoutes = require("./Routes/projects");

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// API health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.join(__dirname, "../portfolio_frontend/build")));

  // Handle React routing
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../portfolio_frontend/build/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: "error",
    message: "Something went wrong!" 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
