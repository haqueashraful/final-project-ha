import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import icon from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import useAuth from '../Hooks/useAuth';
import useCart from '../Hooks/useCart';
import useAxiosPublic from '../Hooks/useAxiosPublic';


const Nav = () => {
  const { user, logOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [cart, refetch] = useCart();


  const handleLogOut = () => {
    logOutUser()
      .then(() => { 
        axiosPublic.post("/logout")
      })
      .catch(error => console.error(error));
  }
  return (
    <div className="relative">
      <div className="navbar bg-black/50 text-white absolute z-10 top-0 w-full">
        <div className="navbar-start">
          <img className='w-14 h-14' src={logo} alt="Logo" />
          <h1>DineCraft</h1>
        </div>
        <div className="navbar-end flex items-center">
          <NavLink to='/' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Home</NavLink>
          <NavLink to='/contactus' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Contact us</NavLink>
          <NavLink to='/dashboard' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Dashboard</NavLink>
          <NavLink to='/ourmenu' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Our menu</NavLink>
          <NavLink to='/ourshop/salad' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Our shop</NavLink>

          <Link to='/dashboard/mycart' className='ml-2 indicator'>
          <span className="indicator-item badge badge-secondary">{cart.length}</span>
            <img className='w-10 h-8' src={icon} alt="Cart Icon" />
          </Link>

        {
          user?.email ? <button onClick={handleLogOut} className='btn btn-ghost btn-sm rounded-btn'>Logout <img className='w-10 h-8' src={user.photoURL}></img></button> : <NavLink to='/login' className='btn btn-ghost btn-sm rounded-btn'>Login</NavLink>
        }
        </div>
      </div>
    </div>
  );
};

export default Nav;
