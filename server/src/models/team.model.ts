import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config";

export class Team extends Model {
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
  { sequelize, modelName: "team" }
);
