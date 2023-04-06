import { combineReducers } from "redux";
import customerReducer from './Customers/customers.reducer';
import prodcatReduce from "./ProductCategory/prodcat.reducer";
import orderReduce from "./Order/order.reducer";
import ordetReduce from "./OrderDetail/ordet.reducer";
import productReduce from "./Product/product.reducer";
import AuthReducer from "./Auth/auth.reducer";

const rootReducer = combineReducers({
    customerState: customerReducer,
    prodcatState: prodcatReduce,
    orderState: orderReduce,
    ordetState: ordetReduce,
    productState: productReduce,
    authState: AuthReducer
})

export default rootReducer