import {actionTypes} from '../actions/actionTypes';

const { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER_DETAILS } = actionTypes;
const initialState = {
  teamId: "",
  teamName: "",
  playerDetails: [
    {
      playerId: "",
      playerName: "",
      playerPosition: "",
    },
  ],
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        playerDetails: [...state.playerDetails,action.payload,],
      };
      break;
    case REMOVE_PLAYER:
      return {
        ...state,
        playerDetails: state.playerDetails.filter(
          (x) => x.id !== action.payload.id
        ),
      };

    // case UPDATE_PLAYER_DETAILS:
    //   return {
    //     ...state,
    //     playerDetails: state.playerDetails.map((p) => {
    //       if (p.playerId !== action.payload.id) {
    //         return 
    //       } else {
    //         return {
    //           ...playerDetails,
    //           [action.payload.playerId]: action.payload.playerData,
    //         };
    //       }
    //     }),
    //   };

    default:
      return state;
      break;
  }
};
