"use client";

import { Snowflake, Wrench, Gauge, Brush, PlugZap, Briefcase } from "lucide-react";

export function GallerySection() {
  const services = [
    { title: "Pemasangan AC Baru", icon: Snowflake },
    { title: "Perbaikan Kompresor", icon: Wrench },
    { title: "Instalasi Pipa", icon: Gauge },
    { title: "Cuci AC Rutin", icon: Brush },
    { title: "Cek Kelistrikan", icon: PlugZap },
    { title: "Servis Lengkap", icon: Briefcase },
  ];

  return (
    <div className="w-full border-t-[3px] border-[#1E3A8A]">
      <section id="galeri" className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight mb-4">
            Galeri Pekerjaan Kami
          </h2>
          <p className="text-[#434655] font-medium max-w-2xl mx-auto">
            Lihat hasil kerja tim teknisi profesional kami dalam memberikan layanan perawatan AC terbaik.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="group bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-2 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1E3A8A] transition-all rounded-sm flex flex-col"
          >
            <div className="bg-[#DBEAFE] border-[2px] border-[#1E3A8A] h-32 md:h-48 flex items-center justify-center mb-2 overflow-hidden relative">
              <item.icon className="w-12 h-12 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            <div className="p-2 text-center font-bold text-sm md:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}
