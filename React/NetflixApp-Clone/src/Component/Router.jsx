import { createBrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Browse from "./Browse";
import CartPreview from "./CartPreview";

function ProtectedRoute({ children }) {    
    const { isAuthenticated } = useContext(AuthContext);
console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated
        ? children
        : <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/browse",
        element: (
            <ProtectedRoute>
                <Browse />
            </ProtectedRoute>
        ),
    },
    {
        path: "/cartpreview",
        element: (
            <ProtectedRoute>
                <CartPreview />
            </ProtectedRoute>
        ),
    },
    {
        path:"*",
        element:<h1>Page not found</h1>
    }
]);