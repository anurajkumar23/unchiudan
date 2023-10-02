/* eslint-disable react/prop-types */

import BottomToTopButton from "./Home/HomeUI/BottomToTopButton";
import Footer from "./Home/HomeUI/Footer";
function GlobalProvider({ children }) {
  return (
    <div className="mx-auto">
      {children}
      <Footer />
      <BottomToTopButton />
    </div>
  );
}

export default GlobalProvider;
