"use client";
// components/BackToTopButton.js
import { useEffect, useState } from "react";

/// BACK TO TOP ///

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 cursor-pointer ${
        isVisible ? "visible" : "invisible"
      } z-10`}
      onClick={scrollToTop}
    >
      <div className="back-to-top-button p-2 rounded-full bg-gradient-to-br from-[#50fd9a] to-[#38d57c] transition-all duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#121212]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackToTopButton;
