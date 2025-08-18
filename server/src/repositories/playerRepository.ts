import { sequelize } from "../config/databases";
import PlayerFactory from "../models/Player";
import TeamFactory from "../models/Team";

const Player = PlayerFactory(sequelize);
const Team = TeamFactory(sequelize);

export const getAllPlayers = async () => {
  return await Player.findAll({ include: Team });
};
