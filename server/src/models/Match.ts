import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface MatchAttributes {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number | null;
  awayScore: number | null;
  date: Date;
}

interface MatchCreationAttributes
  extends Optional<MatchAttributes, "id" | "homeScore" | "awayScore"> {}

export default function (sequelize: Sequelize) {
  class Match
    extends Model<MatchAttributes, MatchCreationAttributes>
    implements MatchAttributes
  {
    public id!: number;
    public homeTeamId!: number;
    public awayTeamId!: number;
    public homeScore!: number | null;
    public awayScore!: number | null;
    public date!: Date;
  }

  Match.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      homeTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      awayTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      homeScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      awayScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Match",
    }
  );

  return Match;
}
