import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import buyCake from '../redux/Cake/cakeActions'
const HooksCakeCointainer = () => {
    const numberOfCake  =  useSelector((state)=>state.cake.numberOfCake)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes = {numberOfCake}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeCointainer