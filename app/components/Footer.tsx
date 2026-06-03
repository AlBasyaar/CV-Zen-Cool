"use client";

import { Snowflake, MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.8 4.45-2.2 6.13-1.6 1.91-4.04 2.96-6.49 2.77-2.67-.15-5.18-1.57-6.52-3.8-1.42-2.31-1.45-5.34-.1-7.7 1.25-2.19 3.6-3.66 6.09-3.92.15-.02.31-.02.46-.02v4.06c-1.41.09-2.73.91-3.4 2.12-.66 1.18-.68 2.69-.11 3.89.58 1.19 1.94 1.97 3.28 1.96 1.34 0 2.59-.83 3.12-2.07.24-.54.33-1.14.33-1.74V.02z"/>
  </svg>
);

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
            Solusi terpercaya untuk semua kebutuhan perawatan dan perbaikan AC Anda. Kami menyediakan layanan profesional dengan teknisi berpengalaman.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581807759926" },
              { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/cvzencool/" },
              { Icon: TiktokIcon, label: "TikTok", href: "https://www.tiktok.com/@cvzencool" }
            ].map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#1E3A8A] p-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_white] transition-all rounded-sm"
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-[#1E3A8A]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#dce3ec] font-[family-name:var(--font-syne)]">
            Layanan kami
          </h4>
          <ul className="space-y-2 text-[#b9c8db] font-medium text-sm">
            <li><a href="" className="hover:text-white transition-colors">Cuci AC</a></li>
            <li><a href="" className="hover:text-white transition-colors">Isi Freon</a></li>
            <li><a href="" className="hover:text-white transition-colors">Bongkar Pasang</a></li>
            <li><a href="" className="hover:text-white transition-colors">Servis Perbaikan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#dce3ec] font-[family-name:var(--font-syne)]">
            Tautan kami
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
              <span>Jl. Gang Bona 3 No. 103, Jakarta Timur, Cakung 13940</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>0852-8556-4117</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>aczencool@gmail.com</span>
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
