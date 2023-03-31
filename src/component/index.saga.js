import { takeEvery,all} from "redux-saga/effects";
import * as ActionCustomer from './Customer/customer.types'
import * as ActionAuth from './Auth/auth.types'
import { DeleteCustomer, EditCustomer, FindCustomer, createCustomer, handleCustomer } from "./Customer/customer.saga";
import {handleSignin,handleSignout,handleSignup} from './Auth/auth.saga'

function* watchAll(){
    yield all([
        takeEvery(ActionCustomer.GET_CUSTOMER_REQUEST,handleCustomer),
        takeEvery(ActionCustomer.ADD_CUSTOMER_REQUEST,createCustomer),
        takeEvery(ActionCustomer.FIND_CUSTOMER_REQUEST,FindCustomer),
        takeEvery(ActionCustomer.EDIT_CUSTOMER_REQUEST,EditCustomer),
        takeEvery(ActionCustomer.DEL_CUSTOMER_REQUEST,DeleteCustomer),
        takeEvery(ActionAuth.SIGNIN_REQUEST, handleSignin),
        takeEvery(ActionAuth.SIGNUP_REQUEST,handleSignup),
        takeEvery(ActionAuth.SIGNOUT_REQUEST, handleSignout)
    ])
}

export default watchAll