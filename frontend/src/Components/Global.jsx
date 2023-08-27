import React from "react";
import Navbar from "./Home/HomeUI/Navbar";
import Footer from "./Home/HomeUI/Footer";
function Global({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Global;
