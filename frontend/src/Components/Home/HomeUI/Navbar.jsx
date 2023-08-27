import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full z-40 mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <a
          href="#"
          className="flex items-center text-white text-lg font-semibold mr-6"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        </a>
      </div>
      {/* Links */}
      <div className="flex items-center">
        <a href="#" className="text-white text-lg font-semibold mr-6">
          Home
        </a>
        <div className="relative group">
          <button
            onClick={toggleMenu}
            className="text-white group-hover:text-gray-200 focus:outline-none"
          >
            Current Affairs
          </button>
          {isMenuOpen && (
            <div className="absolute mt-2 bg-white text-gray-700 py-2 px-4 rounded shadow-md">
              <a href="#" className="block py-1">
                SSC
              </a>
              <a href="#" className="block py-1">
                JEE Main
              </a>
              <a href="#" className="block py-1">
                JEE Advanced
              </a>
            </div>
          )}
        </div>
        <a href="#" className="text-white text-lg font-semibold mr-6">
          UPSC
        </a>
        <a href="#" className="text-white text-lg font-semibold mr-6">
          Downloads
        </a>
      </div>
      {/* Search bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-lg border focus:outline-none"
        />
        <button className="ml-2 bg-white text-blue-500 px-4 py-2 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
