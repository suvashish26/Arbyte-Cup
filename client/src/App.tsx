import Bracket from "./components/Bracket";
import LeagueTable from "./components/LeagueTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 gap-6">
      <Bracket />
      <LeagueTable />
    </div>
  );
}
