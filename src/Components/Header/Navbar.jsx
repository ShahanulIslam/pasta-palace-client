import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }

  return (
    <div className="navbar  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-2xl md:text-3xl">Pasta Palace</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold space-x-6">
          <NavLink className={({isActive}) => isActive ? 'font-bold bg-indigo-500 p-2 text-white' : ''} to='/'>Home</NavLink>
          <NavLink className={({isActive}) => isActive ? 'font-bold bg-indigo-500 text-white p-2' : ''} to='/blog'>Blog</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <div>{user ?
          <div className='flex gap-3 md:gap-5'>
            <img title={user.displayName} className='rounded-full w-11 h-11' src={user.photoURL} alt="User" />
            <button onClick={handleLogOut} className='btn'>Logout</button>
          </div> :
          <Link to='/login' className="btn">Login</Link>
        }</div>

      </div>
    </div>


  );
};

export default Navbar;