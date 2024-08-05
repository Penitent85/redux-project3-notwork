import { BUY_CAKE } from "./actiontypes";

const initialState = {
numberOfCake : 10
};



const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { 
        numberOfCake: state.numberOfCake - action.payload,
       };
    default:
      return state;
  }
};

export default cakeReducer;