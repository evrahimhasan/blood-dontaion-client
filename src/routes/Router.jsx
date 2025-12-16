import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
]);
export default router;