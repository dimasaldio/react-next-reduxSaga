import { call, put } from 'redux-saga/effects'
import RegionApi from './regions.api'
import { GetRegionSuccess, GetRegionFailed, AddRegionSuccess, AddRegionFailed, FindRegionSuccess, FindRegionFailed, EditRegionSuccess, EditRegionFailed, DelRegionFailed, DelRegionSuccess } from './regions.action'

function* handleRegion():any {
    try {
        const result = yield call(RegionApi.list)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}
function* createRegion(action:any):any {
    const { payload } = action
    try {
        const result = yield call(RegionApi.create, payload)
        yield put(AddRegionSuccess(result.data))
        
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}
function* FindRegion(action:any):any {
    const { payload } = action
    try {
        const result = yield call(RegionApi.findOne, payload)
        yield put(FindRegionSuccess(result))
    } catch (error) {
        yield put(FindRegionFailed(error))
    }
}
function* EditRegion(action:any):any {
    const {payload} = action
    try {
        const result = yield call(RegionApi.update, payload)
        yield put(EditRegionSuccess(result.data))
    } catch (error) {
       yield put (EditRegionFailed(error)) 
    }
}

function* DeleteRegion(action:any):any {
    const {payload} = action
    try {
        const result = yield call(RegionApi.deleted, payload)
        yield put(DelRegionSuccess(result))
    } catch (error) {
       yield put (DelRegionFailed(error)) 
    }
}

export {
    handleRegion,
    createRegion,
    FindRegion,
    EditRegion,
    DeleteRegion
}