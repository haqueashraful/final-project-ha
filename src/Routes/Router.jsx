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
import Payment from "../Dashboard/User/Payment";
import PrivateRoute from "./PrivateRoute";
import ManageBookings from "../Dashboard/Admin/ManageBookings";

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
        element: <PrivateRoute><DashLayout/></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <DashBoardHome/>
            },
            {
                path: "additem",
                element:<AdminRoute> <AddItem /> </AdminRoute>
            },
            {
                path: "manageitem",
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
            {
                path: "managebookings",
                element: <ManageBookings />
            },
            {
                path: "allusers",
                element: <AdminRoute> <AllUsers /> </AdminRoute>
            },
            {
                path: "update/:id",
                element: <UpdateItem />
            },
            // {
            //     path: "uerHome",
            //     element: <UserHome />
            // },
            {
                path: "reservation",
                element: <Reservation />
            },
            {
                path: "history",
                element: <PaymentHistory />
            },
            {
                path: "mybookings",
                element: <MyBookings />
            },
            {
                path: "mycart",
                element: <MyCart />
            },
            {
                path: "reviews",
                element: <Reviews />
            },
            {
                path: "payment",
                element: <Payment />
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