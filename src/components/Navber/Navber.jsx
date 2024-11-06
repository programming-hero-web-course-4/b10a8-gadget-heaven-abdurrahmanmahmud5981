import { Link, NavLink } from "react-router-dom";
import { getAllCarts, getAllWishLists } from "../../utils/utils";
import { useEffect, useState } from "react";
import logo from "../../assets/favicon-16x16.png"

const Navber = () => {
  const [showCartsNumbers, setShowCartsNumbers] = useState();
  const [showWishListNumbers, setshowWishListNumbers] = useState();
  // const showCartsNumbers =
  useEffect(() => {
    setShowCartsNumbers(getAllCarts().length);
    setshowWishListNumbers(getAllWishLists().length);
  }, []);
  console.log(showCartsNumbers);
  return (
    <div className="navbar gap-3 max-w-screen-xl mx-auto">
      <div className="navbar-start gap-3 w-full sm:w-1/2">
      
        <NavLink to="/" className=" flex items-center gap-2">
        <img src={logo} alt="Gadget Heaven" className=" object-cover w-8 h-8 hidden sm:block" />
          <span className=" text-lg  sm:text-2xl font-bold">Gadget Heaven</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink className={({isActive})=>isActive&&" bg-slate-700 "} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive&&"bg-slate-700 hover:text-slate-700 text-white "}  to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive&&"bg-slate-700 hover:text-slate-700 text-white "}  to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/dashboard" className="">
          <div
            role="button"
            className="btn bg-white text-black btn-ghost btn-circle hover:bg-secondary/80 transition-all duration-100"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item rounded-full">
                {showCartsNumbers}
              </span>
            </div>
          </div>
        </Link>
        <Link to="/dashboard">
          <div
            role="button"
            className="btn bg-white text-black btn-ghost btn-circle hover:bg-secondary/80 transition-all duration-100"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item rounded-full">
                {showWishListNumbers}
              </span>
            </div>
          </div>
        </Link>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-gho min-h-full min-w-full w-10 h-10 p-0 lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className=" text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
