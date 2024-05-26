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