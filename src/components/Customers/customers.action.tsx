import * as ActionType from './customers.types'

export const GetCustomerRequest = () => ({
    type: ActionType.GET_CUSTOMER_REQUEST
})

export const GetCustomerSuccess = (payload:any) =>({
    type: ActionType.GET_CUSTOMER_SUCCESS,
    payload
})

export const GetCustomerFailed = (payload:any) =>({
    type: ActionType.GET_CUSTOMER_FAILED,
    payload
})

export const AddCustomerRequest = (payload:any) => ({
    type: ActionType.ADD_CUSTOMER_REQUEST,
    payload
})

export const AddCustomerSuccess = (payload:any) => ({
    type: ActionType.ADD_CUSTOMER_SUCCESS,
    payload
})

export const AddCustomerFailed = (payload:any) => ({
    type: ActionType.ADD_CUSTOMER_FAILED,
    payload
})

export const EditCustomerRequest = (payload:any) =>({
    type: ActionType.EDIT_CUSTOMER_REQUEST,
    payload
})

export const EditCustomerSuccess = (payload:any) =>({
    type: ActionType.EDIT_CUSTOMER_SUCCESS,
    payload
})

export const EditCustomerFailed = (payload:any) =>({
    type: ActionType.EDIT_CUSTOMER_FAILED,
    payload
})

export const DelCustomerRequest = (payload:any) =>({
    type:ActionType.DEL_CUSTOMER_REQUEST,
    payload
})

export const DelCustomerSuccess = (payload:any) =>({
    type:ActionType.DEL_CUSTOMER_SUCCESS,
    payload
})

export const DelCustomerFailed = (payload:any) =>({
    type:ActionType.DEL_CUSTOMER_FAILED,
    payload
})
