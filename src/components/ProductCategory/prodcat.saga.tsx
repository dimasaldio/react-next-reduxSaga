import { call, put } from 'redux-saga/effects'
import prodcatApi from './prodcat.api'
import {GetProdcatSuccess,GetProdcatFailed, AddProdcatSuccess, AddProdcatFailed, EditProdcatSuccess, EditProdcatFailed, DelProdcatSuccess, DelProdcatFailed} from './prodcat.action'

function* handleProdcat():any {
    try {
        const result = yield call(prodcatApi.list)
        yield put(GetProdcatSuccess(result))
    } catch (error) {
        yield put(GetProdcatFailed(error))
    }
}
function* createProdcat(action:any):any {
    const { payload } = action
    try {
        const result = yield call(prodcatApi.create, payload)
        yield put(AddProdcatSuccess(result.data))
        
    } catch (error) {
        yield put(AddProdcatFailed(error))
    }
}
function* EditProdcat(action:any):any {
    const {payload} = action
    try {
        const result = yield call(prodcatApi.update, payload)
        yield put(EditProdcatSuccess(result.data))
    } catch (error) {
       yield put (EditProdcatFailed(error)) 
    }
}

function* DeleteProdcat(action:any):any {
    const {payload} = action
    try {
        const result = yield call(prodcatApi.deleted, payload)
        yield put(DelProdcatSuccess(result))
    } catch (error) {
       yield put (DelProdcatFailed(error)) 
    }
}

export {
    handleProdcat,
    createProdcat,
    EditProdcat,
    DeleteProdcat
}