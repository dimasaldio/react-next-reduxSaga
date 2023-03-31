import { combineReducers } from "redux";
import CustomerReduce from "./Customer/customer.reducer";
import AuthReducer from "./Auth/auth.reducer";

const rootReducer = combineReducers({
    CustomerState: CustomerReduce,
    AuthState: AuthReducer
})

export default rootReducer