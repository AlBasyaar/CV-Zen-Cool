"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { buttonBase } from "./shared";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`${buttonBase} !p-2.5 fixed bottom-6 right-6 z-50 bg-[#2563EB] text-white animate-in fade-in zoom-in duration-300`}
    >
      <ArrowUp className="w-5 h-5 stroke-[3]" />
    </button>
  );
}
