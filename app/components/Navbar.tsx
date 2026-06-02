"use client";

import { Snowflake } from "lucide-react";
import { buttonBase } from "./shared";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#faf8ff] border-b-[3px] border-[#1E3A8A]">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#2563EB] p-1.5 border-2 border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] group-hover:-translate-y-[1px] group-hover:shadow-[4px_4px_0px_0px_#1E3A8A] transition-all rounded-sm">
            <Snowflake className="w-5 h-5 text-white" />
          </div>
          <span className="font-[family-name:var(--font-syne)] text-2xl font-extrabold tracking-tight text-[#131b2e]">
            Zen&apos;cool
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
          {["Beranda", "Harga", "Galeri", "Testimoni", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#2563EB] hover:-translate-y-[2px] transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#kontak"
          className={`${buttonBase} bg-[#2563EB] text-white hidden md:inline-flex py-2 px-5 text-sm`}
        >
          Booking Sekarang
        </a>
      </div>
    </header>
  );
}
