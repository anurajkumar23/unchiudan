import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link to="/downloads" className="block">
            Pdfs
          </Link>
          <Link to="/News" className="block">
            News
          </Link>
          <div className="relative group">
            <Link to="/Currentaffairs"

              className="block focus:outline-none"
            >
              Current Affairs
            </Link>
           
          </div>
          <Link to="/login">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
              Login
            </span>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/downloads" className="block py-2">
          Pdfs
          </Link>
          <Link to="/News" className="block">
            News
          </Link>
          <div className="relative group">
            <button
             
              className="block py-2 focus:outline-none"
            >
              Current Affairs
            </button>
          </div>
          <Link to="/login">
            <span className="w-full rounded-full py-1 px-5  bg-blue-300 md:w-max hover:bg-blue-500 text-white text-center font-semibold shadow-md">
              Login
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
