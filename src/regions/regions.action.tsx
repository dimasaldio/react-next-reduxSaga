import * as ActionType from './regions.types'

export const GetRegionRequest = () => ({
    type: ActionType.GET_REGION_REQUEST
})

export const GetRegionSuccess = (payload:any) =>({
    type: ActionType.GET_REGION_SUCCESS,
    payload
})

export const GetRegionFailed = (payload:any) =>({
    type: ActionType.GET_REGION_FAILED,
    payload
})

export const AddRegionRequest = (payload:any) => ({
    type: ActionType.ADD_REGION_REQUEST,
    payload
})

export const AddRegionSuccess = (payload:any) => ({
    type: ActionType.ADD_REGION_SUCCESS,
    payload
})

export const AddRegionFailed = (payload:any) => ({
    type: ActionType.ADD_REGION_FAILED,
    payload
})

export const EditRegionRequest = (payload:any) =>({
    type: ActionType.EDIT_REGION_REQUEST,
    payload
})

export const EditRegionSuccess = (payload:any) =>({
    type: ActionType.EDIT_REGION_SUCCESS,
    payload
})

export const EditRegionFailed = (payload:any) =>({
    type: ActionType.EDIT_REGION_FAILED,
    payload
})

export const DelRegionRequest = (payload:any) =>({
    type:ActionType.DEL_REGION_REQUEST,
    payload
})

export const DelRegionSuccess = (payload:any) =>({
    type:ActionType.DEL_REGION_SUCCESS,
    payload
})

export const DelRegionFailed = (payload:any) =>({
    type:ActionType.DEL_REGION_FAILED,
    payload
})

export const FindRegionRequest = (payload:any) =>({
    type:ActionType.FIND_REGION_REQUEST,
    payload
})

export const FindRegionSuccess = (payload:any) =>({
    type:ActionType.FIND_REGION_SUCCESS,
    payload
})

export const FindRegionFailed = (payload:any) =>({
    type:ActionType.FIND_REGION_FAILED,
    payload
})