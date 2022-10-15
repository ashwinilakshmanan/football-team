import { actionTypes } from "./actionTypes";

const {
  ADD_PLAYER,
  REMOVE_PLAYER,
  UPDATE_PLAYER_DETAILS,
} = actionTypes;

export const addPlayer = () => {
  return {
    type: ADD_PLAYER,
  };
};

export const removePlayer = (playerId) => {
  return {
    type: REMOVE_PLAYER,
    payload: playerId,
  };
};

export const updatePlayerDetails = (playerData) => {
  return {
    type: UPDATE_PLAYER_DETAILS,
    payload: playerData,
  };
};
