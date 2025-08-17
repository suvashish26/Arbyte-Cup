import { motion } from "framer-motion";

const tableData = [
  { team: "Team A", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
  { team: "Team B", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
  { team: "Team C", played: 2, wins: 0, draws: 1, losses: 1, points: 1 },
];

export default function LeagueTable() {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">League Table</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Team</th>
            <th className="p-2">P</th>
            <th className="p-2">W</th>
            <th className="p-2">D</th>
            <th className="p-2">L</th>
            <th className="p-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2">{row.team}</td>
              <td className="p-2">{row.played}</td>
              <td className="p-2">{row.wins}</td>
              <td className="p-2">{row.draws}</td>
              <td className="p-2">{row.losses}</td>
              <td className="p-2 font-bold">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
