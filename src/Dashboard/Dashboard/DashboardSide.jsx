import { Link, NavLink } from "react-router-dom";

const DashboardSide = () => {
    return (
        <div className="w-64 bg-[#D1A054] min-h-screen fixed">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-center">Bistro Boss</h1>
                <p className="text-xl font-bold">Restaurant</p>
            </div>

            <div>
                <div className="py-10">
                    {/* <ul className="space-y-2 text-xl text-center">
                        <li>
                            <NavLink to="/dashboard">Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/additem">Add Item</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageitem">Manage Item</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/managebookings">Manage Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allusers">All User</NavLink>
                        </li>
                      
                    </ul> */}

                    <ul className="space-y-2 text-xl text-center">
                        <li>
                            <Link to="/dashboard">User Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/reservation">Reservation</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/history">Payment History</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/mycart">My Cart</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/reviews">Add Reviews</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/mybookings">My Bookings</Link>
                        </li>
                    </ul>
                </div>

                <div className="pt-10 border-t-2 ">
                    <ul className="space-y-2 text-xl text-center">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu">Our Menu</Link>
                        </li>
                        <li>
                            <Link to="/shop">Our Shop</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardSide;