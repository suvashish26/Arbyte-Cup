import { Router } from "express";
import { getTopScorersList, getTopAssistsList } from "../services/statsService";

const router = Router();

// GET /stats/scorers
router.get("/scorers", async (req, res) => {
  const scorers = await getTopScorersList();
  res.json(scorers);
});

// GET /stats/assists
router.get("/assists", async (req, res) => {
  const assists = await getTopAssistsList();
  res.json(assists);
});

export default router;
