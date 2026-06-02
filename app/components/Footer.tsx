"use client";

import { Snowflake, MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#283044] text-white border-t-[3px] border-[#1E3A8A] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4 group inline-flex">
            <div className="bg-[#2563EB] p-1.5 border-2 border-white shadow-[2px_2px_0px_0px_white] rounded-sm">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <span className="font-[family-name:var(--font-syne)] text-2xl font-extrabold tracking-tight">
              Zen&apos;cool
            </span>
          </a>
          <p className="text-[#b9c8db] font-medium text-sm leading-relaxed mb-6">
            Solusi AC tangguh untuk kehidupan yang lebih nyaman.
          </p>
          <div className="flex gap-3">
            {[Globe, Share2, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white border-2 border-[#1E3A8A] p-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_white] transition-all rounded-sm"
                aria-label="Social Link"
              >
                <Icon className="w-4 h-4 text-[#1E3A8A]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#dce3ec] font-[family-name:var(--font-syne)]">
            Layanan
          </h4>
          <ul className="space-y-2 text-[#b9c8db] font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Cuci AC</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Isi Freon</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bongkar Pasang</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Servis Perbaikan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#dce3ec] font-[family-name:var(--font-syne)]">
            Perusahaan
          </h4>
          <ul className="space-y-2 text-[#b9c8db] font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#galeri" className="hover:text-white transition-colors">Galeri</a></li>
            <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#dce3ec] font-[family-name:var(--font-syne)]">
            Kontak
          </h4>
          <ul className="space-y-3 text-[#b9c8db] font-medium text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Jl. Sudirman No. 123, Jakarta Selatan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>0812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>halo@zencool.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 border-t border-[#4e565d] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#b9c8db]">
        <div>© 2026 CV Zen&apos;cool. Teknisi AC Terpercaya.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-white">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
