import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contactus from "../Pages/Contact/Contactus/Contactus";
import Ourmenu from "../Pages/Menu/Menu/Ourmenu";
import Ourshop from "../Pages/Shop/Shop/Ourshop";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashLayout from "../Layout/DashLayout";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AddItem from "../Dashboard/Admin/AddItem";
import Reservation from "../Dashboard/User/Reservation";
import PaymentHistory from "../Dashboard/User/PaymentHistory";
import MyBookings from "../Dashboard/User/MyBookings";
import MyCart from "../Dashboard/User/MyCart";
import Reviews from "../Dashboard/User/Reviews";
import UserHome from "../Dashboard/User/UserHome";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contactus",
                element: <Contactus />
            },
            {
                path: '/ourmenu',
                element: <Ourmenu />
            },
            {
                path: "/ourshop/:category",
                element: <Ourshop />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashLayout />,
        children: [
            {
                path: "/dashboard",
                element: <AdminHome />
            },
            {
                path: "/dashboard/additem",
                element: <AddItem />
            },
            {
                path: "/dashboard/manageitem",
                element: <AddItem />
            },
            {
                path: "/dashboard/managebookings",
                element: <AddItem />
            },
            {
                path: "/dashboard/allusers",
                element: <AddItem />
            },
            {
                path: "/dashboard/uerHome",
                element: <UserHome />
            },
            {
                path: "/dashboard/reservation",
                element: <Reservation />
            },
            {
                path: "/dashboard/history",
                element: <PaymentHistory />
            },
            {
                path: "/dashboard/mybookings",
                element: <MyBookings />
            },
            {
                path: "/dashboard/mycart",
                element: <MyCart />
            },
            {
                path: "/dashboard/reviews",
                element: <Reviews />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default Router;