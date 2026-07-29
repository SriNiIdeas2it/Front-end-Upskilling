import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import DashBoard from "../Pages/dashBoard/DashBoard";
import Layout from "../Pages/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import UserCreation from "../Pages/userCreation/UserCreation";
import LeaveRequest from "../Pages/LeaveRequest/LeaveRequest";
import LeaveApproval from "../Pages/LeaveApproval/LeaveApproval";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <h2>Page not found.</h2>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        element: <ProtectedRoute />,
        children: [{
            element: <Layout />,
            children: [{
                path: "/dashboard",
                element: <DashBoard />
            },
            {
                path:"/usercreation",
                element:<UserCreation />
            },
            {
                path:"/leaverequest",
                element:<LeaveRequest />
            },
            {
                path:"/leaveapproval",
                element:<LeaveApproval />
            }
            ]
        }
        ]


    }
]);

export default router;
