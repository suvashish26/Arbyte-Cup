import { Match } from "../models/match.model";
import { Team } from "../models/team.model";

export async function calculatePointsTable() {
  const teams = await Team.findAll();
  const matches = await Match.findAll();

  const table = teams.map((team) => ({
    teamId: team.id,
    teamName: team.name,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  }));

  matches.forEach((match) => {
    if (match.homeScore !== null && match.awayScore !== null) {
      const home = table.find((t) => t.teamId === match.homeTeamId)!;
      const away = table.find((t) => t.teamId === match.awayTeamId)!;

      home.played++;
      away.played++;

      if (match.homeScore > match.awayScore) {
        home.wins++;
        home.points += 3;
        away.losses++;
      } else if (match.homeScore < match.awayScore) {
        away.wins++;
        away.points += 3;
        home.losses++;
      } else {
        home.draws++;
        home.points += 1;
        away.draws++;
        away.points += 1;
      }
    }
  });

  return table.sort((a, b) => b.points - a.points);
}
