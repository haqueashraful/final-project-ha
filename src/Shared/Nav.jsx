import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import icon from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';

const Nav = () => {
  return (
    <div className="relative">
      <div className="navbar bg-black/50 text-white absolute z-10 top-0 w-full">
        <div className="navbar-start">
          <img className='w-14 h-14' src={logo} alt="Logo" />
        </div>
        <div className="navbar-end flex items-center">
          <NavLink to='/' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Home</NavLink>
          <NavLink to='/contactus' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Contact us</NavLink>
          <NavLink to='/dashboard' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Dashboard</NavLink>
          <NavLink to='/ourmenu' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Our menu</NavLink>
          <NavLink to='/ourshop/salad' className={({ isActive }) => `btn btn-ghost btn-sm rounded-btn ${isActive ? "text-orange-400" : ""}`}>Our shop</NavLink>

          <Link to='/cart' className='ml-2'>
            <img className='w-10 h-8' src={icon} alt="Cart Icon" />
          </Link>

          <Link to='/signout' className='ml-2 btn btn-ghost btn-sm rounded-btn'>
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
