const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

const authMiddleware = (req, res, next) => {
  // if (!req.session.user) return res.status(401).json({ error: "Unauthorized" });
  next();
};

router.post("/", authMiddleware, async (req, res) => {
  const task = await Task.create({ ...req.body,  });
  res.status(201).json(task);
});

router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;