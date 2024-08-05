import { BUY_ICECREAM } from "./actiontypes";

const initialState = {
numberOfIceCream : 20
};



const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { 
        numberOfIceCream: state.numberOfIceCream - 1,
       };
    default:
      return state;
  }
};

export default icecreamReducer;