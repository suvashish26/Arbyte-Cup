import { getAllTeams } from "../repositories/teamRepository";
import { sequelize } from "../config/databases";
import MatchFactory from "../models/Match";

const Match = MatchFactory(sequelize);

interface LeagueTableEntry {
  id: number;
  name: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

interface MatchType {
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number | null;
  awayScore: number | null;
}

export const getLeagueTable = async (): Promise<LeagueTableEntry[]> => {
  const teams = await getAllTeams();
  const matches: MatchType[] = await Match.findAll();

  const table = teams.map((team) => {
    let played = 0,
      wins = 0,
      draws = 0,
      losses = 0,
      gf = 0,
      ga = 0;
    matches.forEach((m: MatchType) => {
      if (m.homeTeamId === team.id || m.awayTeamId === team.id) {
        played++;
        const isHome = m.homeTeamId === team.id;
        const myScore = isHome ? m.homeScore : m.awayScore;
        const oppScore = isHome ? m.awayScore : m.homeScore;
        if (myScore !== null && oppScore !== null) {
          gf += myScore;
          ga += oppScore;
          if (myScore > oppScore) wins++;
          else if (myScore === oppScore) draws++;
          else losses++;
        }
      }
    });
    const points = wins * 3 + draws;
    const gd = gf - ga;
    return {
      id: team.id,
      name: team.name,
      played,
      wins,
      draws,
      losses,
      gf,
      ga,
      gd,
      points,
    };
  });

  return table.sort((a, b) => b.points - a.points || b.gd - a.gd);
};
