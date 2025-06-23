import { Router } from "express";
import db from "../db";

const router = Router();

router.get("/:no", (req, res) => {
  const { no } = req.params;

  const sql = "SELECT * FROM comments WHERE no = ? ORDER BY created_at DESC";

  db.query(sql, [no], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { content, category, no } = req.body;

  const sql = "INSERT INTO comments (content, category, no) VALUES (?, ?, ?)";
  db.query(sql, [content, category, no], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, content, category, no });
  });
});

export default router;
