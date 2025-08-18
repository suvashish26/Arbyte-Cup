import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface GoalAttributes {
  id: number;
  matchId: number;
  scorerId: number;
}

interface GoalCreationAttributes extends Optional<GoalAttributes, "id"> {}

export default function (sequelize: Sequelize) {
  class Goal
    extends Model<GoalAttributes, GoalCreationAttributes>
    implements GoalAttributes
  {
    public id!: number;
    public matchId!: number;
    public scorerId!: number;
  }

  Goal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      matchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scorerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Goal",
    }
  );

  return Goal;
}
