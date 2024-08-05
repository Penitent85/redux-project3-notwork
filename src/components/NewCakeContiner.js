import React, { useState } from 'react'
import buyCake from '../redux/Cake/cakeActions'
import { connect } from 'react-redux'

const NewCakeCointener = (props) => {
    const [number , setNumber] = useState(1)
  return (
    <div>
        <h1>Number of Cake - {props.numberOfCake}</h1>
        <input type="number"  value={number} onChange={(e)=>setNumber(e.target.value )} />
        <button onClick={()=>props.buyCake(number )}>Buy {number} Cake</button>
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
    buyCake: (number)=>dispatch(buyCake(number))
  }
}


export default   connect(mapStateToProps , mapDispatchToProps)(NewCakeCointener)