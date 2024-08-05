import React from 'react'
import CakeCointener from './components/CakeCointener'
import HooksCakeCointainer from './components/HooksCakeCointainer'
import IceCreamCointener from './components/IceCreamCointener'
import HooksIceCreamCointainer from './components/HooksIceCreamCointainer'
import NewCakeContiner from './components/NewCakeContiner'
import ItemCointener from './components/ItemCointener'
import UserCointainer from './components/UserCointainer'

const App = () => {
  return (
    <div>
      <UserCointainer /> 
      <ItemCointener cake />
      <ItemCointener iceCream />
      <CakeCointener />
      <HooksCakeCointainer />
      <IceCreamCointener />

      <HooksIceCreamCointainer />

      <NewCakeContiner />

    </div>

  )
}

export default App