import express from "express";
import cors from "cors";
import teamRoutes from "./routes/team.routes";
import matchRoutes from "./routes/match.routes";
import { connectDB } from "./config";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/teams", teamRoutes);
app.use("/matches", matchRoutes);

const PORT = 5001;

// First connect to DB, then start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
