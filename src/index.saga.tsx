import { takeEvery,all} from "redux-saga/effects";
import * as ActionRegion from './regions/regions.types'
import { DeleteRegion, EditRegion, FindRegion, createRegion, handleRegion } from "./regions/regions.saga";

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleRegion),
        takeEvery(ActionRegion.ADD_REGION_REQUEST,createRegion),
        takeEvery(ActionRegion.FIND_REGION_REQUEST,FindRegion),
        takeEvery(ActionRegion.EDIT_REGION_REQUEST,EditRegion),
        takeEvery(ActionRegion.DEL_REGION_REQUEST,DeleteRegion)
    ])
}

export default watchAll