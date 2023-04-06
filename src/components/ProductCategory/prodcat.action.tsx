import * as ActionType from './prodcat.types'

export const GetProdcatRequest = () => ({
    type: ActionType.GET_PRODCAT_REQUEST
})

export const GetProdcatSuccess = (payload:any) =>({
    type: ActionType.GET_PRODCAT_SUCCESS,
    payload
})

export const GetProdcatFailed = (payload:any) =>({
    type: ActionType.GET_PRODCAT_FAILED,
    payload
})

export const AddProdcatRequest = (payload:any) => ({
    type: ActionType.ADD_PRODCAT_REQUEST,
    payload
})

export const AddProdcatSuccess = (payload:any) => ({
    type: ActionType.ADD_PRODCAT_SUCCESS,
    payload
})

export const AddProdcatFailed = (payload:any) => ({
    type: ActionType.ADD_PRODCAT_FAILED,
    payload
})

export const EditProdcatRequest = (payload:any) =>({
    type: ActionType.EDIT_PRODCAT_REQUEST,
    payload
})

export const EditProdcatSuccess = (payload:any) =>({
    type: ActionType.EDIT_PRODCAT_SUCCESS,
    payload
})

export const EditProdcatFailed = (payload:any) =>({
    type: ActionType.EDIT_PRODCAT_FAILED,
    payload
})

export const DelProdcatRequest = (payload:any) =>({
    type:ActionType.DEL_PRODCAT_REQUEST,
    payload
})

export const DelProdcatSuccess = (payload:any) =>({
    type:ActionType.DEL_PRODCAT_SUCCESS,
    payload
})

export const DelProdcatFailed = (payload:any) =>({
    type:ActionType.DEL_PRODCAT_FAILED,
    payload
})
