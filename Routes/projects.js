const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// GET: Fetch all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// POST: Add a new project (For Admin)
router.post("/", async (req, res) => {
    const { title, description } = req.body;

    try {
        const newProject = new Project({ title, description });
        await newProject.save();
        res.json({ message: "Project added successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
