import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BottomToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-10 right-10 p-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white focus:outline-none ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={handleScrollToTop}
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BottomToTopButton;
