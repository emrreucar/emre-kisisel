'use client';

import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // sayfa 400px'den fazla kaydırıldığında buton görünür hale gelsin
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // butona tıklandığında sayfa yavaşça yukarı doğru kaydırılacak
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top-button text-4xl ml-10 p-4 text-sky-600 dark:text-rose-600">
      {isVisible && (
        <button onClick={scrollToTop}>
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
