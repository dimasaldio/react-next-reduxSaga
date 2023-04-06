import * as ActionType from './product.types'

export const GetProductRequest = () => ({
    type: ActionType.GET_PRODUCT_REQUEST
})

export const GetProductSuccess = (payload:any) =>({
    type: ActionType.GET_PRODUCT_SUCCESS,
    payload
})

export const GetProductFailed = (payload:any) =>({
    type: ActionType.GET_PRODUCT_FAILED,
    payload
})

export const AddProductRequest = (payload:any) => ({
    type: ActionType.ADD_PRODUCT_REQUEST,
    payload
})

export const AddProductSuccess = (payload:any) => ({
    type: ActionType.ADD_PRODUCT_SUCCESS,
    payload
})

export const AddProductFailed = (payload:any) => ({
    type: ActionType.ADD_PRODUCT_FAILED,
    payload
})

export const EditProductRequest = (payload:any) =>({
    type: ActionType.EDIT_PRODUCT_REQUEST,
    payload
})

export const EditProductSuccess = (payload:any) =>({
    type: ActionType.EDIT_PRODUCT_SUCCESS,
    payload
})

export const EditProductFailed = (payload:any) =>({
    type: ActionType.EDIT_PRODUCT_FAILED,
    payload
})

export const DelProductRequest = (payload:any) =>({
    type:ActionType.DEL_PRODUCT_REQUEST,
    payload
})

export const DelProductSuccess = (payload:any) =>({
    type:ActionType.DEL_PRODUCT_SUCCESS,
    payload
})

export const DelProductFailed = (payload:any) =>({
    type:ActionType.DEL_PRODUCT_FAILED,
    payload
})
