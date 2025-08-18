// import { Router } from "express";
// import { Match } from "../models/match.model";
// import { calculatePointsTable } from "../utils/pointTable";
// import { Team } from "../models/team.model";

// const router = Router();

// router.post("/", async (req, res) => {
//   const match = await Match.create(req.body);
//   res.json(match);
// });

// router.put("/:id", async (req, res) => {
//   await Match.update(req.body, { where: { id: req.params.id } });
//   res.json({ message: "Match updated" });
// });

// router.get("/", async (req, res) => {
//   const matches = await Match.findAll();
//   res.json(matches);
// });

// router.get("/table", async (req, res) => {
//   const table = await calculatePointsTable();
//   res.json(table);
// });

// router.get("/", async (req, res) => {
//   const matches = await Match.findAll({
//     include: [
//       { model: Team, as: "homeTeam", attributes: ["id", "name"] },
//       { model: Team, as: "awayTeam", attributes: ["id", "name"] },
//     ],
//   });

//   res.json(matches);
// });

// export default router;
