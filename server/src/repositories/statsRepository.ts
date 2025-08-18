import { sequelize } from "../config/databases";
import GoalFactory from "../models/Goal";
import AssistFactory from "../models/Assist";
import PlayerFactory from "../models/Player";

const Goal = GoalFactory(sequelize);
const Assist = AssistFactory(sequelize);
const Player = PlayerFactory(sequelize);

export const addGoal = async (matchId: number, scorerId: number) => {
  return await Goal.create({ matchId, scorerId });
};

export const addAssist = async (matchId: number, assisterId: number) => {
  return await Assist.create({ matchId, assisterId });
};

export const getTopScorers = async (limit: number = 5) => {
  return await Goal.findAll({
    attributes: [
      "scorerId",
      [
        Goal.sequelize!.fn("COUNT", Goal.sequelize!.col("scorerId")),
        "goalCount",
      ],
    ],
    include: [{ model: Player, as: "Scorer" }],
    group: ["scorerId", "Scorer.id"],
    order: [[Goal.sequelize!.literal("goalCount"), "DESC"]],
    limit,
  });
};

export const getTopAssists = async (limit: number = 5) => {
  return await Assist.findAll({
    attributes: [
      "assisterId",
      [
        Assist.sequelize!.fn("COUNT", Assist.sequelize!.col("assisterId")),
        "assistCount",
      ],
    ],
    include: [{ model: Player, as: "Assister" }],
    group: ["assisterId", "Assister.id"],
    order: [[Assist.sequelize!.literal("assistCount"), "DESC"]],
    limit,
  });
};
