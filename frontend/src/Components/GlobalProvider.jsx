import React from "react";
import Navbar from "./Home/HomeUI/Navbar";
import Footer from "./Home/HomeUI/Footer";
function GlobalProvider({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="my-10"> {children}</div>

      <Footer />
    </div>
  );
}

export default GlobalProvider;
