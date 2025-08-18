import { getAllPlayers } from "../repositories/playerRepository";

export const getPlayers = async () => {
  return await getAllPlayers();
};
