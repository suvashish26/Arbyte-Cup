import {
  getAllMatches,
  getMatchById,
  updateMatchScore,
} from "../repositories/matchRepository";
import { addGoal, addAssist } from "../repositories/statsRepository";

interface ScoreUpdate {
  homeScore: number;
  awayScore: number;
  goals: { playerId: number; count: number }[];
  assists: { playerId: number; count: number }[];
}

export const getMatches = async () => {
  return await getAllMatches();
};

export const updateMatch = async (id: number, data: ScoreUpdate) => {
  const { homeScore, awayScore, goals, assists } = data;
  const match = await updateMatchScore(id, homeScore, awayScore);

  for (const g of goals || []) {
    for (let i = 0; i < g.count; i++) {
      await addGoal(id, g.playerId);
    }
  }
  for (const a of assists || []) {
    for (let i = 0; i < a.count; i++) {
      await addAssist(id, a.playerId);
    }
  }

  return match;
};
