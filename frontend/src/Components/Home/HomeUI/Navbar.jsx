import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="backdrop-blur text-black p-2 fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/uchiudan.png" className="w-12 md:w-20" alt="logo" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <RiCloseFill className="text-2xl" />
            ) : (
              <RiMenu3Fill className="text-2xl" />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-6 text-xl">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/Quizz" className="block">
            Quiz
          </Link>
          <Link to="/News" className="block">
            News
          </Link>
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="block focus:outline-none"
            >
              Current Affairs
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white border rounded-lg shadow-md">
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  UPSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  BPSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  बिहार दारोगा
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  SSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  रेलवे
                </Link>
              </div>
            )}
          </div>
          <Link to="/downloads">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
              Premium Course
            </span>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/Quizz" className="block py-2">
            Quiz
          </Link>
          <Link to="/News" className="block">
            News
          </Link>
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="block py-2 focus:outline-none"
            >
              Current Affairs
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 py-2 w-48 bg-white border rounded-lg shadow-md">
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  UPSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  BPSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  बिहार दारोगा
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  SSC
                </Link>
                <Link
                  to="/currentaffairss"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  रेलवे
                </Link>
              </div>
            )}
          </div>
          <Link to="/downloads">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
              Premium Course
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
