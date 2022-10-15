import { actionTypes } from "../actions/actionTypes";

const { ADD_TEAM, ADD_PLAYER_TO_TEAM, REMOVE_PLAYER_FROM_TEAM } = actionTypes;
const initialState = {
  teams: [
    {
      id:1,
      name:"Barcelona",
      players:[],
    },
    {
      id:2,
      name:"Man United",
      players:[],
    },
    {
      id:3,
      name:"Man City",
      players:[]
    },

  ],
  playersList: [
    {
      id:1,
      name:"Messi",
      available:true,
    },
    {
      id:2,
      name:"Ronaldo",
      available:true,
    },
    {
      id:1,
      name:"Neymer",
      available:true,
    },
    {
      id:1,
      name:"mbape",
      available:true,
    },
  ],
};

export const sampleReducer = (state = initialState, action) => {
  switch (action.types) {
    case ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case ADD_PLAYER_TO_TEAM:

      const stateCopy={...state};
      const team=stateCopy.teams.find(t=>t.id==action.payload.teamId);
      if(team){
        const existimgPlayerWithSameId=team.players.find(p=>p.id==action.payload.player.id)
        if(existimgPlayerWithSameId==undefined){
            team.players=[...team.players,action.payload.player];
            return stateCopy;
        }
      }


    //   const stateCopy = { ...state };
    //   const team = stateCopy.teams.find(t=> t.id == action.payload.teamId);

    //   if (team) {
    //     let playerAlreadyAdded = false;
    //     stateCopy.teams.forEach((t) => {
    //       const existingPlayerWithSameId = t.players.find(
    //         (p) => p.id == action.payload.playerId
    //       );
    //       if (existingPlayerWithSameId) {
    //         playerAlreadyAdded = true;
    //       }
    //     });

    //     if (playerAlreadyAdded == false) {
    //       team.players = [...team.players, action.payload.player];
    //       const playerFromPList = stateCopy.playersList.find(
    //         (p) => p.id === action.payload.player.id
    //       );
    //       if (playerFromPList) {
    //         playerFromPList.available = false;
    //       }
    //       return { ...stateCopy, playersList: [...stateCopy.playersList] };
    //     }
    //   }
    //   return stateCopy;
      break;

    case REMOVE_PLAYER_FROM_TEAM:
      const stateClone = { ...state };
      const teamObj = stateClone.teams.find(
        (t) => t.id == action.payload.teamId
      );
      teamObj.players = teamObj.players.filter(
        (p) => p.id !== action.payload.playerId
      );
      return stateClone;

    default:
      return state;
      break;
  }
};




