import leftCustomReducer from './leftCustomValue.js';
import operatorCustomReducer from './operatorCustomValue.js';
import { combineReducers } from 'redux';
import errorReducer from "./errorReducer"
import authReducer from "./authReducer"

const allReducers = combineReducers({
    leftCustomValue : leftCustomReducer,
    operatorCustomValue : operatorCustomReducer,
    error : errorReducer,
    auth: authReducer,
})

export default allReducers;