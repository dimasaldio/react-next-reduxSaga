import { call, put } from 'redux-saga/effects'
import OrdetApi from './ordet.api'
import {GetOrdetFailed,GetOrdetSuccess,AddOrdetFailed,AddOrdetSuccess,EditOrdetFailed,EditOrdetSuccess,DelOrdetFailed,DelOrdetSuccess} from './ordet.action'

function* handleOrdet():any {
    try {
        const result = yield call(OrdetApi.list)
        yield put(GetOrdetSuccess(result))
    } catch (error) {
        yield put(GetOrdetFailed(error))
    }
}
function* createOrdet(action:any):any {
    const { payload } = action
    try {
        const result = yield call(OrdetApi.create, payload)
        yield put(AddOrdetSuccess(result.data))
        
    } catch (error) {
        yield put(AddOrdetFailed(error))
    }
}
function* EditOrdet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(OrdetApi.update, payload)
        yield put(EditOrdetSuccess(result.data))
    } catch (error) {
       yield put (EditOrdetFailed(error)) 
    }
}

function* DeleteOrdet(action:any):any {
    const {payload} = action
    try {
        const result = yield call(OrdetApi.deleted, payload)
        yield put(DelOrdetSuccess(result))
    } catch (error) {
       yield put (DelOrdetFailed(error)) 
    }
}

export {
    handleOrdet,
    createOrdet,
    EditOrdet,
    DeleteOrdet
}