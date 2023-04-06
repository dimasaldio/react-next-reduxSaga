import * as ActionType from './order.types'

const INIT_STATE = {
    Orders: []
}

const orderReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_ORDER_REQUEST:
            return { ...state }
        case ActionType.GET_ORDER_SUCCESS:
            return Getordersuccessfully(state, action)
        case ActionType.ADD_ORDER_REQUEST:
            return { ...state }
        case ActionType.ADD_ORDER_SUCCESS:
            return Addordersuccessfully(state, action)
        case ActionType.EDIT_ORDER_REQUEST:
            return { ...state }
        case ActionType.EDIT_ORDER_SUCCESS:
            return Editordersuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getordersuccessfully = (state:any, action:any) => {
    return {
        ...state,
        Orders: action.payload
    }
}

const Addordersuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        Orders: [...state.Orders, payload]
    }
}


const Editordersuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default orderReduce