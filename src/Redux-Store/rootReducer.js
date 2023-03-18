import { combineReducers } from 'redux';
import  birdsReducer  from '../Birds-State/birds-reducer'
import userReducer from '../User-State/user-reducer';

export const rootReducer = combineReducers({
    bird: birdsReducer,
    user: userReducer
})