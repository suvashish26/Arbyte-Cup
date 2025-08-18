import express, { Express } from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import teamRoutes from "./controllers/teamController";
import matchRoutes from "./controllers/matchController";
import playerRoutes from "./controllers/playerController";
import statsRoutes from "./controllers/statsController";
import Team from "./models/Team";
import Player from "./models/Player";
import Match from "./models/Match";
import Goal from "./models/Goal";
import Assist from "./models/Assist";
import seed from "./seeders/seed";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

// Database connection
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err: Error) => console.error(err));

// Initialize models
const TeamModel = Team(sequelize);
const PlayerModel = Player(sequelize);
const MatchModel = Match(sequelize);
const GoalModel = Goal(sequelize);
const AssistModel = Assist(sequelize);

// Associations
TeamModel.hasMany(PlayerModel);
PlayerModel.belongsTo(TeamModel);
MatchModel.belongsTo(TeamModel, { as: "HomeTeam" });
MatchModel.belongsTo(TeamModel, { as: "AwayTeam" });
GoalModel.belongsTo(MatchModel);
GoalModel.belongsTo(PlayerModel, { as: "Scorer" });
AssistModel.belongsTo(MatchModel);
AssistModel.belongsTo(PlayerModel, { as: "Assister" });

// Sync models and seed
sequelize.sync({ force: true }).then(() => {
  console.log("Models synced");
  seed();
});

// Routes
app.use("/teams", teamRoutes);
app.use("/matches", matchRoutes);
app.use("/players", playerRoutes);
app.use("/stats", statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
