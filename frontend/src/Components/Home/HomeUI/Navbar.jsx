import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="backdrop-blur text-black p-2 fixed z-40 w-full">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src="/uchiudan.png" className="w-12 md:w-20" alt="logo" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <RiCloseFill className="text-black w-9 h-9" />
            ) : (
              <RiMenu3Fill className="text-black w-7 h-7" />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-6 text-xl">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/currentaffairs" className="block">
            Current Affairs
          </Link>

          <Link to="/downloads">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold ">
              Premium Course
            </span>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden ">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/currentaffairs" className="block py-2">
            current affairs
          </Link>

          <Link to="/downloads">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold ">
              Premium Course
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
