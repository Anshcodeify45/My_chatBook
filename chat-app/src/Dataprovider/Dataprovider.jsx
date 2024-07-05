import React, { useState } from 'react'
import { createContext } from 'react'

export const Datacontext = createContext(null);

function Dataprovider({children}) {

    const [account,setAccount]=useState('');
  return (
    <Datacontext.Provider value={{
        account,
        setAccount
    }}>
      {children}
    </Datacontext.Provider>
  )
}

export default Dataprovider
