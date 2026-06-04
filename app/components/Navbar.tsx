"use client";

import { useState, useEffect } from "react";
import { Snowflake, Menu, X } from "lucide-react";
import { buttonBase } from "./shared";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "harga", "galeri", "testimoni", "faq"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold as needed
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      if (window.scrollY < 50) current = "beranda";
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8ff] border-b-[3px] border-[#1E3A8A]">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#2563EB] p-1.5 border-2 border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] group-hover:-translate-y-[1px] group-hover:shadow-[4px_4px_0px_0px_#1E3A8A] transition-all rounded-sm">
            <Snowflake className="w-5 h-5 text-white" />
          </div>
          <span className="font-[family-name:var(--font-syne)] text-xl font-extrabold tracking-tight text-[#131b2e]">
           CV Zen&apos;cool
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
          {["Beranda", "Harga", "Galeri", "Testimoni", "FAQ"].map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-all px-3 py-1.5 rounded-sm ${
                  isActive 
                    ? "bg-[#2563EB] text-white border-2 border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] -translate-y-[2px]" 
                    : "hover:text-[#2563EB] hover:-translate-y-[2px] text-[#131b2e]"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>
        
        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href="#kontak"
            className={`${buttonBase} bg-[#2563EB] text-white py-2 px-5 text-sm`}
          >
            Booking Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[#131b2e] hover:text-[#2563EB] transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#faf8ff] border-t-[3px] border-[#1E3A8A] shadow-[0_4px_0_0_rgba(30,58,138,0.1)] flex flex-col overflow-hidden">
          <nav className="flex flex-col px-6 py-4 font-bold text-sm">
            {["Beranda", "Harga", "Galeri", "Testimoni", "FAQ"].map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 transition-all animate-slide-in flex items-center ${
                    isActive 
                      ? "bg-[#2563EB] text-white border-2 border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] rounded-sm px-4 my-1" 
                      : "border-b border-[#1E3A8A]/20 hover:text-[#2563EB] hover:pl-2 text-[#131b2e]"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${buttonBase} bg-[#2563EB] text-white mt-6 mb-2 py-3 px-5 text-center text-sm w-full flex justify-center animate-slide-in`}
              style={{ animationDelay: `${5 * 0.1}s` }}
            >
              Booking Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
