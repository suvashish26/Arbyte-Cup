import { Router } from "express";
import { getLeagueTable } from "../services/teamService";

const router = Router();

router.get("/", async (req, res) => {
  const teams = await getLeagueTable();
  res.json(teams);
});

export default router;
