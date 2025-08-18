import { Router } from "express";

import { getMatches, updateMatch } from "../services/matchService";

const router = Router();

// GET /matches
router.get("/", async (req, res) => {
  const matches = await getMatches();
  res.json(matches);
});

// PUT /matches/:id
router.put("/:id", async (req, res) => {
  try {
    const match = await updateMatch(parseInt(req.params.id), req.body);
    res.json(match);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
