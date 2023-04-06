import { call, put } from 'redux-saga/effects'
import ProductApi from './product.api'
import {GetProductFailed,GetProductSuccess,AddProductFailed,AddProductSuccess,EditProductFailed,EditProductSuccess,DelProductFailed,DelProductSuccess} from './product.action'


function* handleProduct():any {
    try {
        const result = yield call(ProductApi.list)
        yield put(GetProductSuccess(result))
    } catch (error) {
        yield put(GetProductFailed(error))
    }
}
function* createProduct(action:any):any {
    const { payload } = action
    try {
        const result = yield call(ProductApi.create, payload)
        yield put(AddProductSuccess(result.data))
        
    } catch (error) {
        yield put(AddProductFailed(error))
    }
}
function* EditProduct(action:any):any {
    const {payload} = action
    try {
        const result = yield call(ProductApi.update, payload)
        yield put(EditProductSuccess(result.data))
    } catch (error) {
       yield put (EditProductFailed(error)) 
    }
}

function* DeleteProduct(action:any):any {
    const {payload} = action
    try {
        const result = yield call(ProductApi.deleted, payload)
        yield put(DelProductSuccess(result))
    } catch (error) {
       yield put (DelProductFailed(error)) 
    }
}

export {
    handleProduct,
    createProduct,
    EditProduct,
    DeleteProduct
}