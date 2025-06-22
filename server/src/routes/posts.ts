import { Router } from "express";
import db from "../db";

const router = Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, content, category } = req.body;
  const sql = "INSERT INTO posts (title, content, category) VALUES (?, ?, ?)";
  db.query(sql, [title, content, category], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, title, content, category });
  });
});

export default router;
