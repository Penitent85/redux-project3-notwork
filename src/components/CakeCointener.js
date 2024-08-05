import React from 'react'
import buyCake from '../redux/Cake/cakeActions'
import { connect } from 'react-redux'

const CakeCointener = (props) => {
  return (
    <div>
        <h1>Number of Cake - {props.numberOfCake}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    numberOfCake: state.cake.numberOfCake
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    buyCake: ()=>dispatch(buyCake())
  }
}


export default   connect(mapStateToProps , mapDispatchToProps)(CakeCointener)