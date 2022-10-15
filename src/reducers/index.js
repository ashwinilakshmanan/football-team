import { combineReducers } from "redux";
import { teamReducer } from "./teamReducer";
import { playerReducer } from "./playerReducer";
import {sampleReducer} from "./sampleReducer";

export const rootReducer = combineReducers({
  teamsReducer: teamReducer,
  players: playerReducer,
  sample:sampleReducer,
});
