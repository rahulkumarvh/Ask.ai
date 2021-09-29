import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="bg-black shadow dark:bg-gray-800 border-b-2">
        <div className="container flex items-center justify-center p-6 pr-20 mx-auto navfont text-gray-200 text-xl capitalize dark:text-gray-300">
          <Link
            to="/"
            className="border-b-2 border-transparent  hover:border-red-500 mx-1.5 sm:mx-6"
            activeClassName="active"
          >
            <span>Home</span>
          </Link>

          <span className="bg-white h-1 w-32 "></span>

          <Link
            to="/app"
            className="border-b-2 border-transparent  hover:border-red-500 mx-1.5 sm:mx-6"
            activeClassName="active"
          >
            App
          </Link>

          <span className="bg-white h-1 w-32 "></span>

          <Link
            to="/about"
            className="border-b-2 border-transparent  hover:border-red-500 mx-1.5 sm:mx-6"
            activeClassName="active"
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
