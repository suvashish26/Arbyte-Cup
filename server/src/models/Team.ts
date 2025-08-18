import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface TeamAttributes {
  id: number;
  name: string;
}

interface TeamCreationAttributes extends Optional<TeamAttributes, "id"> {}

export default function (sequelize: Sequelize) {
  class Team
    extends Model<TeamAttributes, TeamCreationAttributes>
    implements TeamAttributes
  {
    public id!: number;
    public name!: string;
  }

  Team.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Team",
    }
  );

  return Team;
}
