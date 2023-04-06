import * as ActionType from './customers.types'

const INIT_STATE = {
    customers: []
}

const customerReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_CUSTOMER_REQUEST:
            return { ...state }
        case ActionType.GET_CUSTOMER_SUCCESS:
            return Getcustomersuccessfully(state, action)
        case ActionType.ADD_CUSTOMER_REQUEST:
            return { ...state }
        case ActionType.ADD_CUSTOMER_SUCCESS:
            return Addcustomersuccessfully(state, action)
        case ActionType.EDIT_CUSTOMER_REQUEST:
            return { ...state }
        case ActionType.EDIT_CUSTOMER_SUCCESS:
            return Editcustomersuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getcustomersuccessfully = (state:any, action:any) => {
    return {
        ...state,
        customers: action.payload
    }
}

const Addcustomersuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        customers: [...state.customers, payload]
    }
}


const Editcustomersuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default customerReduce