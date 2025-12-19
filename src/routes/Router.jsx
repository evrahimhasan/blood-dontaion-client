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
import Donation from "../pages/donation/Donation";
import PaymentSucces from "../pages/paymentSucces/PaymentSucces";
import AllRequset from "../pages/dashboard/allRequest/AllRequset";
import ViewRequest from "../pages/dashboard/allRequest/viewRequest/ViewRequest";

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
            },
            {
                path: '/donation',
                Component: Donation
            },
            {
                path: '/payment-success',
                Component: PaymentSucces
            },
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
                path: "/dashboard/my-donation-requests",
                Component: MyRequest
            },
            {
                path: "/dashboard/all-requests",
                Component: AllRequset
            },
            {
                path: "/dashboard/view-request/:id",
                Component: ViewRequest
            },
        ]
    }
]);
export default router;