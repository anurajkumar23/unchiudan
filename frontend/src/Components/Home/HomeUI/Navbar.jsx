import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="fixed z-40 w-full ">
      <div className="backdrop-blur mx-auto px-3 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between  gap-6  md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <div className="w-full flex justify-between md:w-max md:px-0">
            <a href="#" aria-label="logo">
              <img src="/uchiudan.png" className="w-12 md:w-20" alt="logo" />
            </a>
            <div className="flex items-center md:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative z-40 px-2 py-3 sm:-mr-6"
              >
                {isMenuOpen ? (
                  <RiCloseFill className="text-black w-7 h-7" />
                ) : (
                  <RiMenu3Fill className="text-black w-7 h-7" />
                )}
              </label>
            </div>
          </div>
          <label
            role="button"
            htmlFor="toggle_nav"
            className={`fixed w-full z-30 h-full top-0 left-0  ${
              isMenuOpen ? " " : "hidden"
            }`}
            onClick={toggleMenu}
          ></label>
          <div
            className={`flex z-50 flex-col md:flex-row justify-between items-center gap-y-4 p-6  md:w-8/12 md:gap-y-4 md:p-0 md:bg-transparent lg:w-7/12 fixed top-0 ${
              isMenuOpen ? "left-0" : "-left-full"
            } transition-all duration-500 max-w-sm h-full md:left-0 md:h-auto w-4/5 md:max-w-none md:relative  lg:first-letter:top-0`}
          >
            <div className="  w-full h-full md:h-auto text-black mt-16  md:mt-0">
              <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0 md:space-x-6">
                <li>
                  <a href="#" className="  md:px-3">
                    <div className="relative text-yellow-800   before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left   before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="  md:px-3 group">
                    <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left   before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                      <span className="transition group-hover:text-yellow-700    ">
                        Current affairs
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="  md:px-3 group">
                    <div className="relative text-gray-600  before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left   before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                      <span className="transition group-hover:text-yellow-700    ">
                        UPSC
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mt-[8rem] md:mt-0 gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
              <button
                type="button"
                title="Login"
                className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
              >
                <span className="  text-gray-700   font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                  Login
                </span>
              </button>
              <button
                type="button"
                title="Shop now"
                className="w-full rounded-full py-1 px-5 text-center bg-blue-400 md:w-max"
              >
                <span className="  text-white font-semibold">
                  Premium Course
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
