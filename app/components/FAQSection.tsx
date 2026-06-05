"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cardBase } from "./shared";

export function FAQSection() {
  const faqs = [
    {
      q: "Layanan dan Jaminan",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Masa Garansi:</strong> Pengerjaan service bergaransi 1 bulan (30 hari).</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Klaim Garansi:</strong> Jika terjadi masalah yang sama dalam masa garansi, kami akan memperbaikinya tanpa biaya tambahan.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Pengecualian:</strong> Garansi tidak berlaku jika kerusakan disebabkan oleh faktor eksternal (bencana alam, tegangan listrik tidak stabil, atau modifikasi oleh pihak lain).</span>
          </li>
        </ul>
      ),
    },
    {
      q: "Pembayaran",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Metode Pembayaran:</strong> Pembayaran dapat dilakukan secara tunai atau melalui transfer bank.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Tagihan (Invoice):</strong> Invoice resmi akan diberikan setelah pengerjaan layanan selesai dengan baik.</span>
          </li>
        </ul>
      ),
    },
    {
      q: "Jadwal, Pembatalan & Reschedule",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Pemesanan Jadwal:</strong> Jadwal layanan dapat dibuat melalui Telepon, WhatsApp, atau Website kami.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Perubahan Jadwal:</strong> Proses <em>reschedule</em> sangat fleksibel dan dapat menyesuaikan kembali dengan ketersediaan waktu Anda.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A] shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed"><strong>Kedatangan Teknisi:</strong> Teknisi kami akan tiba sesuai estimasi waktu tempuh. Jika terjadi kendala di perjalanan, kami akan segera menginformasikan kepada Anda.</span>
          </li>
        </ul>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.15rem,5.5vw,3rem)] font-extrabold text-[#131b2e] tracking-tighter mb-4">
          Syarat dan Ketentuan
        </h2>
        <p className="text-[#434655] font-medium">
          Informasi penting mengenai layanan kami. Silakan baca dengan seksama sebelum menggunakan jasa kami.
        </p>
      </div>

      <div className={`${cardBase} p-6 md:p-8 bg-[#DBEAFE]/30`}>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] rounded-sm overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-left hover:bg-[#EFF6FF] transition-colors focus:outline-none focus:bg-[#EFF6FF]"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${i}`}
              >
                <span className="text-[#131b2e] text-lg font-[family-name:var(--font-syne)]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2563EB] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-content-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 font-medium text-[#434655] border-t-[2px] border-dashed border-[#1E3A8A] mx-6 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
