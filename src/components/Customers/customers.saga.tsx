import { call, put } from 'redux-saga/effects'
import customersApi from './customers.api'
import {GetCustomerSuccess,GetCustomerFailed, AddCustomerSuccess, AddCustomerFailed, EditCustomerSuccess, EditCustomerFailed, DelCustomerFailed, DelCustomerSuccess} from './customers.action'

function* handleCustomer():any {
    try {
        const result = yield call(customersApi.list)
        yield put(GetCustomerSuccess(result))
    } catch (error) {
        yield put(GetCustomerFailed(error))
    }
}
function* createCustomer(action:any):any {
    const { payload } = action
    try {
        const result = yield call(customersApi.create, payload)
        yield put(AddCustomerSuccess(result.data))
        
    } catch (error) {
        yield put(AddCustomerFailed(error))
    }
}
function* EditCustomer(action:any):any {
    const {payload} = action
    try {
        const result = yield call(customersApi.update, payload)
        yield put(EditCustomerSuccess(result.data))
    } catch (error) {
       yield put (EditCustomerFailed(error)) 
    }
}

function* DeleteCustomer(action:any):any {
    const {payload} = action
    try {
        const result = yield call(customersApi.deleted, payload)
        yield put(DelCustomerFailed(result))
    } catch (error) {
       yield put (DelCustomerSuccess(error)) 
    }
}

export {
    handleCustomer,
    createCustomer,
    EditCustomer,
    DeleteCustomer
}