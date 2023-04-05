import * as ActionType from './regions.types'

const INIT_STATE = {
    regions: [],
    region: []
}

const regionReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_REGION_REQUEST:
            return { ...state }
        case ActionType.GET_REGION_SUCCESS:
            return Getregionsuccessfully(state, action)
        case ActionType.ADD_REGION_REQUEST:
            return { ...state }
        case ActionType.ADD_REGION_SUCCESS:
            return Addregionsuccessfully(state, action)
        case ActionType.FIND_REGION_REQUEST:
            return { ...state }
        case ActionType.FIND_REGION_SUCCESS:
            return Findregionsuccessfully(state, action)
        case ActionType.EDIT_REGION_REQUEST:
            return { ...state }
        case ActionType.EDIT_REGION_SUCCESS:
            return Editregionsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getregionsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const Addregionsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        regions: [...state.regions, payload]
    }
}

const Findregionsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        region: payload
    }
}

const Editregionsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default regionReduce