import { call, put } from 'redux-saga/effects'
import CustomerApi from './customer.api'
import { GetCustomerSuccess, GetCustomerFailed, AddCustomerSuccess, AddCustomerFailed, FindCustomerSuccess, FindCustomerFailed, EditCustomerSuccess, EditCustomerFailed, DelCustomerFailed, DelCustomerSuccess } from './customer.actions'

function* handleCustomer() {
    try {
        const result = yield call(CustomerApi.list)
        yield put(GetCustomerSuccess(result))
    } catch (error) {
        yield put(GetCustomerFailed(error))
    }
}
function* createCustomer(action) {
    const { payload } = action
    try {
        const result = yield call(CustomerApi.create, payload)
        yield put(AddCustomerSuccess(result.data))
        
    } catch (error) {
        yield put(AddCustomerFailed(error))
    }
}
function* FindCustomer(action) {
    const { payload } = action
    try {
        const result = yield call(CustomerApi.findOne, payload)
        yield put(FindCustomerSuccess(result))
    } catch (error) {
        yield put(FindCustomerFailed(error))
    }
}
function* EditCustomer(action) {
    const {payload} = action
    try {
        const result = yield call(CustomerApi.update, payload)
        yield put(EditCustomerSuccess(result.data))
    } catch (error) {
       yield put (EditCustomerFailed(error)) 
    }
}

function* DeleteCustomer(action) {
    const {payload} = action
    try {
        const result = yield call(CustomerApi.deleted, payload)
        yield put(DelCustomerSuccess(result))
    } catch (error) {
       yield put (DelCustomerFailed(error)) 
    }
}

export {
    handleCustomer,
    createCustomer,
    FindCustomer,
    EditCustomer,
    DeleteCustomer
}