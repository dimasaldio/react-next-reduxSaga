import { combineReducers } from "redux";
import regionReducer from "./regions/regions.reducer";

const rootReducer = combineReducers({
    RegionState: regionReducer
})

export default rootReducer