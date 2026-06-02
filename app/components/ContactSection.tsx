"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { buttonBase, cardBase } from "./shared";

export function ContactSection() {
  return (
    <div className="w-full border-t-[3px] border-[#1E3A8A]">
      <section id="kontak" className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight">
            Ada yang Bisa Kami Bantu?
          </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-6 rounded-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E3A8A] transition-all">
            <div className="bg-[#DBEAFE] p-3 border-2 border-[#1E3A8A] rounded-sm">
              <MapPin className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-syne)] font-bold text-xl">Alamat</div>
              <div className="text-sm font-medium text-[#434655]">
                Jl. Sudirman No. 123, Jakarta Selatan
              </div>
            </div>
          </div>

          <div className="bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-6 rounded-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E3A8A] transition-all">
            <div className="bg-[#DBEAFE] p-3 border-2 border-[#1E3A8A] rounded-sm">
              <Phone className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-syne)] font-bold text-xl">Telepon</div>
              <div className="text-sm font-medium text-[#434655]">0812-3456-7890</div>
            </div>
          </div>

          <div className="bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-6 rounded-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E3A8A] transition-all">
            <div className="bg-[#DBEAFE] p-3 border-2 border-[#1E3A8A] rounded-sm">
              <Mail className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-syne)] font-bold text-xl">Email</div>
              <div className="text-sm font-medium text-[#434655]">halo@zencool.com</div>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890"
            className={`${buttonBase} bg-[#25D366] text-white w-full mt-4 text-lg justify-center`}
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
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-bold text-sm text-[#131b2e]">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-bold text-sm text-[#131b2e]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A]"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-bold text-sm text-[#131b2e]">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="border-[2px] border-[#1E3A8A] rounded-sm p-3 font-medium outline-none transition-all focus:bg-[#EFF6FF] focus:shadow-[4px_4px_0px_0px_#1E3A8A] resize-none"
                placeholder="Tulis keluhan AC Anda di sini..."
                required
              ></textarea>
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
