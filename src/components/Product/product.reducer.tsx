import * as ActionType from './product.types'

const INIT_STATE = {
    products: []
}

const productReduce = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_REQUEST:
            return { ...state }
        case ActionType.GET_PRODUCT_SUCCESS:
            return Getproductsuccessfully(state, action)
        case ActionType.ADD_PRODUCT_REQUEST:
            return { ...state }
        case ActionType.ADD_PRODUCT_SUCCESS:
            return Addproductsuccessfully(state, action)
        case ActionType.EDIT_PRODUCT_REQUEST:
            return { ...state }
        case ActionType.EDIT_PRODUCT_SUCCESS:
            return Editproductsuccessfully(state, action)
        default:
            return { ...state };
    }
}

const Getproductsuccessfully = (state:any, action:any) => {
    return {
        ...state,
        products: action.payload
    }
}

const Addproductsuccessfully = (state:any, action:any) => {
    const { payload } = action
    return {
        ...state,
        products: [...state.products, payload]
    }
}


const Editproductsuccessfully = (state:any,action:any) => {
    return {
        ...state,
    }
}
export default productReduce