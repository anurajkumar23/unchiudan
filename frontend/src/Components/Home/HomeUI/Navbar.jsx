/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import axios from "axios";
import {useNavigate} from "react-router-dom"

// const handleLogout = () => {
//   localStorage.clear();
//   window.location.reload();
// };

const Navbar = ({ userData }) => {
  const navigate =useNavigate()
  console.log("🚀 ~ file: Navbar.jsx:6 ~ Navbar ~ userData:", userData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = async () => {
    try {
      await axios.get("https://ucchi-urran-backend.vercel.app/api/user/logout"); // Make a request to your backend logout route
      localStorage.clear();
      console.log("🚀 ~ file: Navbar.jsx:26 ~ handleLogout ~ localStorage: cleared");
      window.location.href = "/"; // Reload the page after clearing localStorage
    } catch (error) {
      console.error("Error logging out:", error);
    }
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
          <Link to="/pdfs" className="block">
            Pdfs
          </Link>
          <Link to="/News" className="block">
            News
          </Link>
          <div className="relative group">
            <Link to="/Currentaffairs" className="block focus:outline-none">
              Current Affairs
            </Link>
          </div>
          {userData ? (
            <>
              <Link to="/login">
                <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                  {userData.user.firstname}
                </span>
              </Link>
              <button onClick={handleLogout}>
                <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                  logout
                </span>
              </button>
            </>
          ) : (
            <Link to="/login">
              <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/pdfs" className="block py-2">
            Pdfs
          </Link>
          <Link to="/News" className="block">
            News
          </Link>

          <Link to="/Currentaffairs" className="block py-2 focus:outline-none">
            Current Affairs
          </Link>

          {userData ? (
            <>
              <Link to="/login">
                <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                  {userData.user.firstname}
                </span>
              </Link>
              <button onClick={handleLogout} >
                <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                  logout
                </span>
              </button>
            </>
          ) : (
            <Link to="/login">
              <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
                Login
              </span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
