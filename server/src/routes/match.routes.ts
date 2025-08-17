import { Router } from "express";
import { Match } from "../models/match.model";
import { calculatePointsTable } from "../utils/pointTable";

const router = Router();

router.post("/", async (req, res) => {
  const match = await Match.create(req.body);
  res.json(match);
});

router.put("/:id", async (req, res) => {
  await Match.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Match updated" });
});

router.get("/", async (req, res) => {
  const matches = await Match.findAll();
  res.json(matches);
});

router.get("/table", async (req, res) => {
  const table = await calculatePointsTable();
  res.json(table);
});

export default router;
