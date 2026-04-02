import React, { createContext, useState } from 'react'

export const WindowStateContext = createContext();

const StateContext = ({children}) => {

    const [windowState, setwindowState] = useState({
        github : false,
        spotify : false,
        note : false,
        pdf : false,
        cli : false,
    })

  return (
    <WindowStateContext.Provider value={{windowState,setwindowState}}>
        {children}
    </WindowStateContext.Provider>
  )
}

export default StateContext