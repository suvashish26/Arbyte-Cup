import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface AssistAttributes {
  id: number;
  matchId: number;
  assisterId: number;
}

interface AssistCreationAttributes extends Optional<AssistAttributes, "id"> {}

export default function (sequelize: Sequelize) {
  class Assist
    extends Model<AssistAttributes, AssistCreationAttributes>
    implements AssistAttributes
  {
    public id!: number;
    public matchId!: number;
    public assisterId!: number;
  }

  Assist.init(
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
      assisterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Assist",
    }
  );

  return Assist;
}
