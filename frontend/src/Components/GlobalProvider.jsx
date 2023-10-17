/* eslint-disable react/prop-types */

import BottomToTopButton from "./Home/HomeUI/BottomToTopButton";
import Footer from "./Home/HomeUI/Footer";

function GlobalProvider({ children }) {
  return (
    <div className="mx-auto">
      {children}
      <div className="mt-[10rem] md:mt-0">
        {" "}
        <Footer />
      </div>

      <BottomToTopButton className="z-10" />

    </div>
  );
}

export default GlobalProvider;
