import { getTopScorers, getTopAssists } from "../repositories/statsRepository";

export const getTopScorersList = async () => {
  return await getTopScorers();
};

export const getTopAssistsList = async () => {
  return await getTopAssists();
};
