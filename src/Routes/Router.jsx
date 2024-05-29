import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contactus from "../Pages/Contact/Contactus/Contactus";
import Ourmenu from "../Pages/Menu/Menu/Ourmenu";
import Ourshop from "../Pages/Shop/Shop/Ourshop";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashLayout from "../Layout/DashLayout";
import AddItem from "../Dashboard/Admin/AddItem";
import Reservation from "../Dashboard/User/Reservation";
import PaymentHistory from "../Dashboard/User/PaymentHistory";
import MyBookings from "../Dashboard/User/MyBookings";
import MyCart from "../Dashboard/User/MyCart";
import Reviews from "../Dashboard/User/Reviews";
import DashBoardHome from "../Dashboard/Dashboard/DashBoardHome";
import AllUsers from "../Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Dashboard/Admin/ManageItem";
import UpdateItem from "../Dashboard/Admin/UpdateItem";

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
                element: <DashBoardHome />
            },
            {
                path: "/dashboard/additem",
                element:<AdminRoute> <AddItem /> </AdminRoute>
            },
            {
                path: "/dashboard/manageitem",
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
            {
                path: "/dashboard/managebookings",
                element: <AddItem />
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute> <AllUsers /> </AdminRoute>
            },
            {
                path: "/dashboard/update/:id",
                element: <UpdateItem />
            },
            // {
            //     path: "/dashboard/uerHome",
            //     element: <UserHome />
            // },
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