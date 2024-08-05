import { combineReducers } from "redux";
import CakeReducer from './Cake/cakeReducer' ;
import UserReducer from './User/userReducer' ;
import IcecreamReducer from './Icecream/icecreamReducer' ;
export const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IcecreamReducer,
    user : UserReducer
  });