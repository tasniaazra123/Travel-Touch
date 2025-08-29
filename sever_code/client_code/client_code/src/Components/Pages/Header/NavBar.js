import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';
import "./NavBar.css";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
    const navOptions = (
      <>
      <li className="list-none md:flex">
  <div className="mr-4">
  <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-red-500 hover:py-2 hover:px-3 ml-4 md:ml-0 hover:rounded-lg hover:bg-slate-800/30 hover:md:-my-2 hover:md:-mx-3
              ${
                isActive
                  ? "border-b-4 hover:border-b-4 border-green-400 pb-1 "
                  : ""
              }`
            }
          >
            Home
          </NavLink>
  </div>
  <div className="ml-4">
  <NavLink
            to="/Allproducts"
            className={({ isActive }) =>
              `hover:text-red-500 hover:py-2 hover:px-3 ml-4 md:ml-0 hover:rounded-lg hover:bg-slate-800/30 hover:md:-my-2 hover:md:-mx-3
              ${
                isActive
                  ? "border-b-4 hover:border-b-4 border-green-400 pb-1 "
                  : ""
              }`
            }
          >
            Places
          </NavLink>
  </div>
  <div className="ml-4">
  <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `hover:text-red-500 hover:py-2 hover:px-3 ml-4 md:ml-0 hover:rounded-lg hover:bg-slate-800/30 hover:md:-my-2 hover:md:-mx-3
              ${
                isActive
                  ? "border-b-4 hover:border-b-4 border-green-400 pb-1 "
                  : ""
              }`
            }
          >
            Contact Us
          </NavLink>
  </div>
</li>
      </>
    );
    return (
      <div className="navbar  bg-opacity-30  z-10 mb-16 bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="sm:block menu-sm dropdown-content mt-3 w-56 z-20">
  <div className="fixed w-32 py-4 bg-opacity-70 z-10 bg-gray-600 rounded-md text-slate-200 subTitle text-2xl">
    {navOptions}
  </div>
</ul>

          </div>
          <img className="w-28 pl-4 pr-4 md:block hidden" src={logo} alt="" />
        <Link to='/' className='font-bold text-2xl'>Travel Touch</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLink  className="menu-horizontal px-1 subTitle text-lg space-x-6">
            {navOptions}
          </NavLink>
        </div>
  
        <div className="navbar-end">
       
          {user ? (
            <>
             <Link to={"/dashboard"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-gray-800">Dashboard</Link>
              <button onClick={handleLogOut} className="btn btn-ghost md:ml-4">
                LogOut
              </button>
            </>
          ) : (
            <>
              <>
                <Link to="/login" className="btn btn-ghost md:ml-4">
                  Login
                </Link>
              </>
            </>
          )}
        </div>
      </div>
    );
  };
  

  

// export default NavBar;


//         <nav className="bg-gray-800 shadow-lg">
//             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     <div className="flex">
//                         <Link to={"/"} className="flex-shrink-0 flex items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-green-500">
//                                 <path d="M21,3H3A1,1,0,0,0,2,4v7.36a3,3,0,0,0,1.4,2.54l4,3.2a3,3,0,0,0,3.2,0l4-3.2a3,3,0,0,0,1.4-2.54V4A1,1,0,0,0,21,3ZM12,17.28l-3.6-2.88a1,1,0,0,1-.4-.84V7h8v6.56a1,1,0,0,1-.4.84L12,17.28Z" fill="currentColor" />
//                                 <path d="M12,11a2,2,0,1,1,2-2A2,2,0,0,1,12,11Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,12,8Z" fill="currentColor" />
//                             </svg>
//                             <span className="ml-2 font-bold text-red-400 text-2xl">BioSecure</span>
//                         </Link>
//                     </div>
//                     <div className="flex items-center">
//                         <div className="hidden md:block">
//                             <div className="ml-4 flex items-center md:ml-6">
//                                 <Link to={"/"} className=" hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium text-white">Home</Link>

//                                 <Link to={'/AllProducts'} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Products</Link>

//                                 <Link to={'/About'} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">About</Link>
//                                 <Link to={"/Contact"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Contact</Link>
//                                 {user?.uid ?
//                                     <>
//                                         <Link to={"/dashboard"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Dashboard</Link>
//                                         <LinkonClick={handleLogOut} href="/Login" className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Sign out</a>
//                                     </>
//                                     :
//                                     <Link to={"/login"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Login</Link>
//                                 }
//                             </div>
//                         </div>
//                         <div className="-mr-2 flex md:hidden">
//                             <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md  hover:text-red-600 hover:bg-gray-100 focus:outline-none bg-white focus:bg-gray-300 focus: transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
//                                 <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                                 </svg>
//                                 <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
//                 <div className="px-2 pt-2 pb-3 sm:px-3">
//                     <Link to={"/"} className=" hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium text-white">Home</Link>
//                     <Link to={"/AllProducts"} className=" hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium text-white">Products</Link>
//                     <Link to={"/About"} className=" hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium text-white">About</Link>
//                     <Link to={"/Contact"} className=" hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium text-white">Contact</Link>
//                     {user?.uid ?
//                         <>
//                             <Link to={"/dashboard"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Dashboard</Link>
//                             <Link to={"/Login"} onClick={handleLogOut} className=" hover:text-red-600 px-3 py-2 rounded-md block text-md font-medium text-white">Sign out</Link>
//                         </>
//                         :
//                         <Link to={"/login"} className=" hover:text-red-600 px-3 py-2 rounded-md text-md font-medium text-white">Login</Link>

//                     }
//                 </div>
//             </div>


//         </nav>
//     );
// };

export default NavBar;
