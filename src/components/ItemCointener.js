import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/Cake/cakeActions";
import buyIceCream from "../redux/Icecream/icecreamActions";

const ItemCointener = (props) => {
  return (
    <div>
      <h1>Item - {props.item}</h1>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCake
    : state.iceCream.numberOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    :()=> dispatch(buyIceCream());
 
    return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(ItemCointener);
