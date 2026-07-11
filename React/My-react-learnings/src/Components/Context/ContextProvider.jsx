import { createContext, useState } from "react"
import {CreateCountContext} from './CreateCountContext'

const ContextProvider = ({children}) => {
    const [Count,SetCount]=useState(0);
  return (
    <CreateCountContext.Provider value={{Count,SetCount}}>{children}</CreateCountContext.Provider>
  )
}

export default ContextProvider
