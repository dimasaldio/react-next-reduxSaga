import { takeEvery,all, take} from "redux-saga/effects";
import * as ActionCustomer from './Customers/customers.types'
import * as ActionProdcat from './ProductCategory/prodcat.types'
import * as ActionOrder from './Order/order.types'
import * as ActionOrdet from './OrderDetail/ordet.types'
import * as ActionProduct from './Product/product.types'
import * as ActionAuth from './Auth/auth.types'
import { DeleteCustomer, EditCustomer, createCustomer, handleCustomer } from "./Customers/customers.saga";
import { DeleteProdcat, EditProdcat, createProdcat, handleProdcat } from './ProductCategory/prodcat.saga';
import { DeleteOrder, EditOrder, createOrder, handleOrder } from "./Order/order.saga";
import { DeleteOrdet,EditOrdet,createOrdet,handleOrdet } from './OrderDetail/ordet.saga';
import { DeleteProduct,EditProduct,createProduct,handleProduct } from './Product/product.saga'
import {handleSignin, handleSignout, handleSignup} from './Auth/auth.saga'

function* watchAll(){
    yield all([
        takeEvery(ActionCustomer.GET_CUSTOMER_REQUEST,handleCustomer),
        takeEvery(ActionCustomer.ADD_CUSTOMER_REQUEST,createCustomer),
        takeEvery(ActionCustomer.EDIT_CUSTOMER_REQUEST,EditCustomer),
        takeEvery(ActionCustomer.DEL_CUSTOMER_REQUEST,DeleteCustomer),
        takeEvery(ActionProdcat.ADD_PRODCAT_REQUEST, createProdcat),
        takeEvery(ActionProdcat.DEL_PRODCAT_REQUEST, DeleteProdcat),
        takeEvery(ActionProdcat.EDIT_PRODCAT_REQUEST, EditProdcat),
        takeEvery(ActionProdcat.GET_PRODCAT_REQUEST, handleProdcat),
        takeEvery(ActionOrder.ADD_ORDER_REQUEST, createOrder),
        takeEvery(ActionOrder.DEL_ORDER_REQUEST, DeleteOrder),
        takeEvery(ActionOrder.EDIT_ORDER_REQUEST, EditOrder),
        takeEvery(ActionOrder.GET_ORDER_REQUEST, handleOrder),
        takeEvery(ActionOrdet.ADD_ORDET_REQUEST, createOrdet),
        takeEvery(ActionOrdet.DEL_ORDET_REQUEST, DeleteOrdet),
        takeEvery(ActionOrdet.EDIT_ORDET_REQUEST, EditOrdet),
        takeEvery(ActionOrdet.GET_ORDET_REQUEST, handleOrdet),
        takeEvery(ActionProduct.ADD_PRODUCT_REQUEST, createProduct),
        takeEvery(ActionProduct.DEL_PRODUCT_REQUEST, DeleteProduct),
        takeEvery(ActionProduct.EDIT_PRODUCT_REQUEST, EditProduct),
        takeEvery(ActionProduct.GET_PRODUCT_REQUEST, handleProduct),
        takeEvery(ActionAuth.SIGNIN_REQUEST, handleSignin),
        takeEvery(ActionAuth.SIGNOUT_REQUEST, handleSignout),
        takeEvery(ActionAuth.SIGNUP_REQUEST, handleSignup)
    ])
}

export default watchAll