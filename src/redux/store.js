import { combineReducers, createStore  , applyMiddleware} from "redux";

import { rootReducer } from "./rootReducer";

import logger from 'redux-logger'
import { thunk } from "redux-thunk";



export const store = createStore(
    rootReducer, applyMiddleware(logger , thunk)
    
    /* preloadedState, */ +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// export const store = createStore(rootReducer , applyMiddleware(logger)) 