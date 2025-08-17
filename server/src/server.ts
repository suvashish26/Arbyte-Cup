import express from "express";
import cors from "cors";
import teamRoutes from "./routes/team.routes";
import matchRoutes from "./routes/match.routes";
import { sequelize } from "./config";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/teams", teamRoutes);
app.use("/matches", matchRoutes);
const PORT = 5000;

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
