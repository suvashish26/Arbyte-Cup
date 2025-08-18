import { sequelize } from "../config/databases";
import TeamFactory from "../models/Team";

const Team = TeamFactory(sequelize);

export const getAllTeams = async () => {
  return await Team.findAll();
};
