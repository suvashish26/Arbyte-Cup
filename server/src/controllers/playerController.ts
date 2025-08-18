import { Router } from "express";
import { getPlayers } from "../services/playerService";

const router = Router();

router.get("/", async (req, res) => {
  const players = await getPlayers();
  res.json(players);
});

export default router;
