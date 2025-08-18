import { sequelize } from "../config/databases";
import TeamFactory from "../models/Team";
import PlayerFactory from "../models/Player";
import MatchFactory from "../models/Match";

const Team = TeamFactory(sequelize);
const Player = PlayerFactory(sequelize);
const Match = MatchFactory(sequelize);

export default async function seed() {
  // Teams
  const teams = await Team.bulkCreate([
    { name: "Team A" },
    { name: "Team B" },
    { name: "Team C" },
  ]);

  // Players
  await Player.bulkCreate([
    { name: "Player A1", teamId: teams[0].id },
    { name: "Player A2", teamId: teams[0].id },
    { name: "Player B1", teamId: teams[1].id },
    { name: "Player B2", teamId: teams[1].id },
    { name: "Player C1", teamId: teams[2].id },
    { name: "Player C2", teamId: teams[2].id },
  ]);

  // Matches
  const now = new Date();
  await Match.bulkCreate([
    { homeTeamId: teams[0].id, awayTeamId: teams[1].id, date: now },
    { homeTeamId: teams[1].id, awayTeamId: teams[0].id, date: now },
    { homeTeamId: teams[0].id, awayTeamId: teams[2].id, date: now },
    { homeTeamId: teams[2].id, awayTeamId: teams[0].id, date: now },
    { homeTeamId: teams[1].id, awayTeamId: teams[2].id, date: now },
    { homeTeamId: teams[2].id, awayTeamId: teams[1].id, date: now },
  ]);

  console.log("Database seeded");
}
