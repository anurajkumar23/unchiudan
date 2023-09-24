/* eslint-disable react/prop-types */


import Footer from "./Home/HomeUI/Footer";
function GlobalProvider({ children }) {
  return (
    <div className="mx-auto">
      
      {children}
      <Footer />
    </div>
  );
}

export default GlobalProvider;
