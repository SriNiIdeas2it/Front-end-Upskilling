import { createContext, useContext, useState } from "react"

interface AuthContextType {
    isAuthenticated: boolean,
    setIsAuthenticated: any
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("Auth context is not there");
    }
    return context;
}

