/* eslint-disable react/prop-types */

import Navbar from "./Home/HomeUI/Navbar";
import Footer from "./Home/HomeUI/Footer";
function GlobalProvider({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default GlobalProvider;
