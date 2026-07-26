import { createContext, useContext ,useState} from "react";

export const AuthContext=createContext();
export function  AuthProvider({children}){      
      const [isAuthenticated,setIsAuthenticated]=useState(!!localStorage.getItem("UID"));
      const [userDet,setUserDet]=useState({
        uid:null,
        email:null
      })
      const [isLoading,setIsLoading]=useState(false);
    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,userDet,setUserDet,isLoading,setIsLoading}}>
        {children}
        </AuthContext.Provider>
    )
}