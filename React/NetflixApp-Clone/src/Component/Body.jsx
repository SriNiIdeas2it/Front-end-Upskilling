import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom"
import Login from "./Login"
import Browse from "./browse"
import { useContext, useState } from "react"
import { AuthContext } from "../Component/AuthContext"
import CartPreview from "./CartPreview"


const Body = () => {
  
const {isAuthenticated,setIsAuthenticated}=useContext(AuthContext);
    function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
        }
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/browser",
            element:<ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Browse />
                    </ProtectedRoute>
        },
        {
            path:"/cartpreview",
            element:<CartPreview />
        }
    ])
  return (
   <RouterProvider router={appRouter} />
  )
}

export default Body

 