import { combineReducers } from 'redux';
import productReducer from './reducer';
import cartReducer from './reducerCart';

export default combineReducers({
    product: productReducer,
    cart: cartReducer
})