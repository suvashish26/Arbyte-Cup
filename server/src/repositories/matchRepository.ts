import { sequelize } from "../config/databases";
import MatchFactory from "../models/Match";
import TeamFactory from "../models/Team";

const Match = MatchFactory(sequelize);
const Team = TeamFactory(sequelize);

export const getAllMatches = async () => {
  return await Match.findAll({
    include: [
      { model: Team, as: "HomeTeam" },
      { model: Team, as: "AwayTeam" },
    ],
  });
};

export const getMatchById = async (id: number) => {
  return await Match.findByPk(id);
};

export const updateMatchScore = async (
  id: number,
  homeScore: number,
  awayScore: number
) => {
  const match = await Match.findByPk(id);
  if (!match) throw new Error("Match not found");
  match.homeScore = homeScore;
  match.awayScore = awayScore;
  await match.save();
  return match;
};
