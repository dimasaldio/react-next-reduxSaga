import * as ActionType from './ordet.types'

const INIT_STATE = {
    ordets: []
}

const ordetReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_ORDET_REQUEST:
            return { ...state }
        case ActionType.GET_ORDET_SUCCESS:
            return Getordetsuccessfully(state, action)
        case ActionType.ADD_ORDET_REQUEST:
            return { ...state }
        case ActionType.ADD_ORDET_SUCCESS:
            return Addordetsuccessfully(state, action)
        case ActionType.EDIT_ORDET_REQUEST:
            return { ...state }
        case ActionType.EDIT_ORDET_SUCCESS:
            return Editordetsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getordetsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        ordets: action.payload
    }
}

const Addordetsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        ordets: [...state.ordets, payload]
    }
}


const Editordetsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default ordetReduce