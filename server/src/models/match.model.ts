import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config";
import { Team } from "./team.model";

export class Match extends Model {
  public id!: number;
  public homeTeamId!: number;
  public awayTeamId!: number;
  public homeScore!: number | null;
  public awayScore!: number | null;
  public date!: Date;
}

Match.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    homeTeamId: { type: DataTypes.INTEGER, allowNull: false },
    awayTeamId: { type: DataTypes.INTEGER, allowNull: false },
    homeScore: { type: DataTypes.INTEGER, allowNull: true },
    awayScore: { type: DataTypes.INTEGER, allowNull: true },
    date: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize, modelName: "match" }
);
Team.hasMany(Match, { foreignKey: "homeTeamId", as: "homeMatches" });
Team.hasMany(Match, { foreignKey: "awayTeamId", as: "awayMatches" });
Match.belongsTo(Team, { foreignKey: "homeTeamId", as: "homeTeam" });
Match.belongsTo(Team, { foreignKey: "awayTeamId", as: "awayTeam" });
