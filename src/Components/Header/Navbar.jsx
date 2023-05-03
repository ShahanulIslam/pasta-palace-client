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
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Pasta Palace</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink className={({ isActive }) => isActive ? 'font-bold bg-indigo-500 text-white' : ''} to="/"><li><a>Home</a></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold bg-indigo-500 text-white' : ''} to="/blog"><li><a>Blog</a></li></NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div>{user ?
          <div className='flex gap-5'>
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