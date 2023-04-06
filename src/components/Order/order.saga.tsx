import { call, put } from 'redux-saga/effects'
import OrdersApi from './order.api'
import {GetOrderFailed,GetOrderSuccess,AddOrderFailed,AddOrderSuccess,EditOrderFailed,EditOrderSuccess,DelOrderFailed,DelOrderSuccess} from './order.action'

function* handleOrder():any {
    try {
        const result = yield call(OrdersApi.list)
        yield put(GetOrderSuccess(result))
    } catch (error) {
        yield put(GetOrderFailed(error))
    }
}
function* createOrder(action:any):any {
    const { payload } = action
    try {
        const result = yield call(OrdersApi.create, payload)
        yield put(AddOrderSuccess(result.data))
        
    } catch (error) {
        yield put(AddOrderFailed(error))
    }
}
function* EditOrder(action:any):any {
    const {payload} = action
    try {
        const result = yield call(OrdersApi.update, payload)
        yield put(EditOrderSuccess(result.data))
    } catch (error) {
       yield put (EditOrderFailed(error)) 
    }
}

function* DeleteOrder(action:any):any {
    const {payload} = action
    try {
        const result = yield call(OrdersApi.deleted, payload)
        yield put(DelOrderFailed(result))
    } catch (error) {
       yield put (DelOrderSuccess(error)) 
    }
}

export {
    handleOrder,
    createOrder,
    EditOrder,
    DeleteOrder
}