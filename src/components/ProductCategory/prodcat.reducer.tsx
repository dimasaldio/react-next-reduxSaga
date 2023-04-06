import * as ActionType from './prodcat.types'

const INIT_STATE = {
    prodcats: []
}

const prodcatReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_PRODCAT_REQUEST:
            return { ...state }
        case ActionType.GET_PRODCAT_SUCCESS:
            return Getprodcatsuccessfully(state, action)
        case ActionType.ADD_PRODCAT_REQUEST:
            return { ...state }
        case ActionType.ADD_PRODCAT_SUCCESS:
            return Addprodcatsuccessfully(state, action)
        case ActionType.EDIT_PRODCAT_REQUEST:
            return { ...state }
        case ActionType.EDIT_PRODCAT_SUCCESS:
            return Editprodcatsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getprodcatsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        prodcats: action.payload
    }
}

const Addprodcatsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        prodcats: [...state.prodcats, payload]
    }
}


const Editprodcatsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default prodcatReduce