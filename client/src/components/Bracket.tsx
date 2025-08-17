import { motion } from "framer-motion";

export default function Bracket() {
  return (
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Tournament Bracket</h2>
      <div className="flex justify-around items-center">
        <div className="p-4 bg-gray-700 rounded-lg">Team A</div>
        <div className="text-lg">vs</div>
        <div className="p-4 bg-gray-700 rounded-lg">Team B</div>
      </div>
      <div className="mt-6 text-center text-yellow-400">
        Winner → Finals vs Team C
      </div>
    </motion.div>
  );
}
