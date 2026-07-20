import { createContext, useContext ,useState} from "react";

export const AuthContext=createContext();
export function  AuthProvider({children}){      
      const [isAuthenticated,setIsAuthenticated]=useState(!!localStorage.getItem("UID"));
      const [userDet,setUserDet]=useState({
        uid:null,
        email:null
      })
    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,userDet,setUserDet}}>
        {children}
        </AuthContext.Provider>
    )
}