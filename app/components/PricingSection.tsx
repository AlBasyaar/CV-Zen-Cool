"use client";

import { CheckSquare } from "lucide-react";
import { buttonBase } from "./shared";

export function PricingSection() {
  return (
    <section id="harga" className="py-20 px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight mb-4">
          Harga Layanan
        </h2>
        <p className="text-[#434655] font-medium max-w-2xl mx-auto">
          Berikut adalah daftar harga layanan kami. Kami menawarkan berbagai layanan dengan harga kompetitif.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Basic */}
        <div className="bg-white border-[3px] border-[#1E3A8A] shadow-[6px_6px_0px_0px_#1E3A8A] rounded-sm p-6 md:p-8 flex flex-col h-[480px]">
          <div className="mb-4 text-xs font-bold text-[#434655] uppercase tracking-wider">Basic</div>
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-4">Cuci AC</h3>
          <div className="font-[family-name:var(--font-syne)] font-extrabold text-[#2563EB] mb-6 leading-[1.1]">
            <div className="text-4xl md:text-5xl">Rp</div>
            <div className="text-6xl md:text-7xl">75k</div>
          </div>
          <div className="w-full h-[2px] bg-[#1E3A8A] mb-6"></div>
          <div className="flex-1 space-y-4 font-medium text-sm text-[#131b2e]">
            {["Cuci Filter & Evaporator", "Cek Tekanan Freon", "Pembersihan Area Kerja"].map((ft, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>{ft}</span>
              </div>
            ))}
          </div>
          <a href="#kontak" className={`${buttonBase} bg-[#DBEAFE] text-[#131b2e] w-full mt-6`}>
            Booking
          </a>
        </div>

        {/* Populer */}
        <div className="bg-[#2563EB] border-[3px] border-[#1E3A8A] shadow-[8px_8px_0px_0px_#1E3A8A] rounded-sm p-6 md:p-8 flex flex-col h-[520px] relative text-white -translate-y-4 md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#2563EB] border-[3px] border-[#1E3A8A] px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_#1E3A8A]">
            Paling Laris
          </div>
          <div className="mb-4 text-xs font-bold text-[#DBEAFE] uppercase tracking-wider">Populer</div>
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-4">Servis Lengkap</h3>
          <div className="font-[family-name:var(--font-syne)] font-extrabold mb-6 leading-[1.1]">
            <div className="text-4xl md:text-5xl">Rp</div>
            <div className="text-6xl md:text-7xl">200k</div>
          </div>
          <div className="w-full h-[2px] bg-white mb-6"></div>
          <div className="flex-1 space-y-4 font-medium text-sm">
            {["Semua Fitur Basic", "Tambah Freon R32/R410", "Cek Kelistrikan AC", "Garansi 30 Hari"].map((ft, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-white shrink-0" />
                <span>{ft}</span>
              </div>
            ))}
          </div>
          <a href="#kontak" className={`${buttonBase} bg-white text-[#2563EB] w-full mt-6`}>
            Booking Prioritas
          </a>
        </div>

        {/* Premium */}
        <div className="bg-[#283044] border-[3px] border-[#1E3A8A] shadow-[6px_6px_0px_0px_#1E3A8A] rounded-sm p-6 md:p-8 text-white flex flex-col h-[480px]">
          <div className="mb-4 text-xs font-bold text-[#b9c8db] uppercase tracking-wider">Premium</div>
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-4">Total Care</h3>
          <div className="font-[family-name:var(--font-syne)] font-extrabold text-white mb-6 leading-[1.1]">
            <div className="text-4xl md:text-5xl">Rp</div>
            <div className="text-6xl md:text-7xl">350k</div>
          </div>
          <div className="w-full h-[2px] bg-white mb-6"></div>
          <div className="flex-1 space-y-4 font-medium text-sm">
            {["Semua Fitur Populer", "Flushing Sistem", "Penggantian Kapasitor*"].map((ft, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-white shrink-0" />
                <span>{ft}</span>
              </div>
            ))}
          </div>
          <a href="#kontak" className={`${buttonBase} bg-transparent text-white border-white shadow-[4px_4px_0px_0px_white] hover:shadow-[8px_8px_0px_0px_white] w-full mt-6`}>
            Konsultasi
          </a>
        </div>
      </div>
    </section>
  );
}
