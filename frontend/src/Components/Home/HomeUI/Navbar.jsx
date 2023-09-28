/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import axios from "axios";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function Navbar({ userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://ucchi-urran-backend.vercel.app/api/user"
        );
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.get("https://ucchi-urran-backend.vercel.app/api/user/logout");
      localStorage.clear();
      console.log(
        "🚀 ~ file: Navbar.jsx:26 ~ handleLogout ~ localStorage: cleared"
      );
      window.location.href = "/";
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
            <div className="relative" onClick={() => setOpen(!open)}>
              <div className="flex items-center gap-x-1">
                {user && user.image ? (
                  <img
                    src={user.image}
                    alt={`profile-${user.firstName}`}
                    className="aspect-square w-[30px] rounded-full object-cover"
                  />
                ) : (
                  <span className="w-[30px] h-[30px] flex items-center justify-center text-sm text-white bg-blue-500 rounded-full">
                    {userData && userData.user
                      ? `${userData.user.firstname.charAt(
                          0
                        )} ${userData.user.lastname.charAt(0)}`
                      : ""}
                  </span>
                )}
                {open ? (
                  <AiOutlineCaretUp className="text-sm text-richblack-100" />
                ) : (
                  <AiOutlineCaretDown className="text-sm text-richblack-100" />
                )}
              </div>
              {open && (
                <div className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800">
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                      <VscDashboard className="text-lg" />
                      Dashboard
                    </div>
                  </Link>
                  <div
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover.bg-richblack-700 hover.text-richblack-25"
                  >
                    <VscSignOut className="text-lg" />
                    Logout
                  </div>
                </div>
              )}
            </div>
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
            <div className="relative" onClick={() => setOpen(!open)}>
              <div className="flex items-center gap-x-1">
                {user && user.image ? (
                  <img
                    src={user.image}
                    alt={`profile-${user.firstName}`}
                    className="aspect-square w-[30px] rounded-full object-cover"
                  />
                ) : (
                  <span className="w-[30px] h-[30px] flex items-center justify-center text-sm text-white bg-blue-500 rounded-full">
                    {userData && userData.user
                      ? `${userData.user.firstname.charAt(
                          0
                        )} ${userData.user.lastname.charAt(0)}`
                      : ""}
                  </span>
                )}
                {open ? (
                  <AiOutlineCaretUp className="text-sm text-richblack-100" />
                ) : (
                  <AiOutlineCaretDown className="text-sm text-richblack-100" />
                )}
              </div>
              {open && (
                <div className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800">
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover.bg-richblack-700 hover.text-richblack-25">
                      <VscDashboard className="text-lg" />
                      Dashboard
                    </div>
                  </Link>
                  <div
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover.bg-richblack-700 hover.text-richblack-25"
                  >
                    <VscSignOut className="text-lg" />
                    Logout
                  </div>
                </div>
              )}
            </div>
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
}
