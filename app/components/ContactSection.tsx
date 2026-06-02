"use client";

import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { buttonBase, cardBase } from "./shared";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.8 4.45-2.2 6.13-1.6 1.91-4.04 2.96-6.49 2.77-2.67-.15-5.18-1.57-6.52-3.8-1.42-2.31-1.45-5.34-.1-7.7 1.25-2.19 3.6-3.66 6.09-3.92.15-.02.31-.02.46-.02v4.06c-1.41.09-2.73.91-3.4 2.12-.66 1.18-.68 2.69-.11 3.89.58 1.19 1.94 1.97 3.28 1.96 1.34 0 2.59-.83 3.12-2.07.24-.54.33-1.14.33-1.74V.02z" />
  </svg>
);

export function ContactSection() {
  return (
    <div className="w-full border-t-[3px] border-[#1E3A8A]">
      <section id="kontak" className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight mb-4">
            Hubungi Kami
          </h2>
          <p className="text-[#434655] font-medium max-w-2xl mx-auto">
            Butuh bantuan atau ingin mendapatkan penawaran? Hubungi kami melalui form di bawah ini atau melalui kontak yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className={`${cardBase} h-fit`}>
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#DBEAFE] p-2 border-[2px] border-[#1E3A8A] rounded-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-syne)] font-bold text-lg">Alamat</div>
                  <div className="text-sm font-medium text-[#434655] leading-relaxed">
                    Jl. Gang Bona 3 No. 103, Jakarta Timur, Cakung 13940
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#DBEAFE] p-2 border-[2px] border-[#1E3A8A] rounded-sm mt-0.5">
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-syne)] font-bold text-lg">Telepon</div>
                  <div className="text-sm font-medium text-[#434655]">0852-8556-4117</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#DBEAFE] p-2 border-[2px] border-[#1E3A8A] rounded-sm mt-0.5">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-syne)] font-bold text-lg">Email</div>
                  <div className="text-sm font-medium text-[#434655]">aczencool@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b-[2px] border-dashed border-[#1E3A8A]/20 pb-8">
                <div className="bg-[#DBEAFE] p-2 border-[2px] border-[#1E3A8A] rounded-sm mt-0.5">
                  <Clock className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-syne)] font-bold text-lg">Jam Operasional</div>
                  <div className="text-sm font-medium text-[#434655]">Senin - Minggu: 08.00 - 17.00</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="font-[family-name:var(--font-syne)] font-bold text-lg mb-3">Ikuti Kami</div>
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
                      className="bg-white border-[2px] border-[#1E3A8A] p-2.5 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1E3A8A] transition-all rounded-sm"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6281234567890"
              className={`${buttonBase} bg-[#25D366] text-white w-full mt-8 text-lg justify-center`}
            >
              <MessageCircle className="w-6 h-6" />
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className={cardBase}>
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-bold text-sm text-[#131b2e]">Nama Lengkap</label>
                  <input type="text" id="name" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]" placeholder="Nama Anda" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-bold text-sm text-[#131b2e]">No Telepon</label>
                  <input type="tel" id="phone" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]" placeholder="Masukkan no telepon anda" required />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="address" className="font-bold text-sm text-[#131b2e]">Alamat</label>
                <textarea id="address" rows={2} className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] resize-none" placeholder="Alamat lengkap Anda" required></textarea>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="location" className="font-bold text-sm text-[#131b2e]">Link Share Location (Opsional)</label>
                <input type="url" id="location" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]" placeholder="https://maps.google.com/..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-bold text-sm text-[#131b2e]">Layanan yang dibutuhkan</label>
                  <select id="service" defaultValue="" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] bg-white cursor-pointer" required>
                    <option value="" disabled>Pilih layanan</option>
                    <option value="Service AC">Service AC</option>
                    <option value="Cuci AC">Cuci AC</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="qty" className="font-bold text-sm text-[#131b2e]">Jumlah AC</label>
                  <input type="number" id="qty" min="1" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]" placeholder="1" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="font-bold text-sm text-[#131b2e]">Tanggal Kunjungan</label>
                  <input type="date" id="date" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] bg-white cursor-pointer" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="time" className="font-bold text-sm text-[#131b2e]">Jam Kunjungan</label>
                  <input type="time" id="time" className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] bg-white cursor-pointer" required />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="problem" className="font-bold text-sm text-[#131b2e]">Permasalahan AC</label>
                <textarea id="problem" rows={3} className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] resize-none" placeholder="Deskripsikan keluhan AC Anda..." required></textarea>
              </div>

              <button type="submit" className={`${buttonBase} bg-[#2563EB] text-white w-full mt-2`}>
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
