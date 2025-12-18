import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashBoardLayout from "../dashboardLayout/DashBoardLayout";
import MainDashBoard from "../pages/dashboard/MainDashboard/MainDashBoard";
import AddRequest from "../pages/dashboard/addRequest/AddRequest";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import PriviteRoute from "./PriviteRoute";
import MyRequest from "../pages/dashboard/myRequest/MyRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: SignUp
            }
        ]
    },
    {
        path: "dashboard",
        element: <PriviteRoute><DashBoardLayout></DashBoardLayout></PriviteRoute>,
        children: [
            {
                path: "/dashboard",
                Component: MainDashBoard
            },
            {
                path: "add-request",
                Component: AddRequest
            },
            {
                path: "all-users",
                Component: AllUsers
            },
            {
                path: "my-request",
                Component: MyRequest
            }
        ]
    }
]);
export default router;