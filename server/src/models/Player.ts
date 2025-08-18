import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface PlayerAttributes {
  id: number;
  name: string;
  teamId: number;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, "id"> {}

export default function (sequelize: Sequelize) {
  class Player
    extends Model<PlayerAttributes, PlayerCreationAttributes>
    implements PlayerAttributes
  {
    public id!: number;
    public name!: string;
    public teamId!: number;
  }

  Player.init(
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
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Player",
    }
  );

  return Player;
}
