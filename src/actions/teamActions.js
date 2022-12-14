import { actionTypes } from "./actionTypes";

const { ADD_TEAM, ADD_PLAYER_TO_TEAM, REMOVE_PLAYER_FROM_TEAM, ADD_PLAYER } =
  actionTypes;

export const addTeam = (teamData) => {
  // console.log("teamAcction",teamData)
  return {
    type: ADD_TEAM,
    payload: teamData,
  };
};

export const addPlayerToTeam = (teamId, player) => {
  console.log("payload player", player,"payload",teamId);
  return {
    type: ADD_PLAYER_TO_TEAM,
    payload: { teamId, player },
  };
};

export const removePlayerFromTeam = (team, player) => {
  console.log("remove", player);
  //console.log(" action teamId:",teamId,"playerId:",playerId)
  return {
    type: REMOVE_PLAYER_FROM_TEAM,
    payload: { team, player },
  };
};

export const addPlayer = () => {
  return {
    type: ADD_PLAYER,
  };
};
