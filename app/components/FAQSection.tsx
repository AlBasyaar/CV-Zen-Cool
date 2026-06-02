"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "Layanan dan Jaminan",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Pengerjaan service bergaransi 1 bulan.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Jika terjadi masalah dalam 30 hari setelah service, kami akan memperbaikinya tanpa biaya tambahan.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Garansi tidak berlaku jika kerusakan disebabkan oleh faktor eksternal seperti bencana alam, tegangan listrik tidak stabil, atau modifikasi yang dilakukan oleh pihak lain.</span>
          </li>
        </ul>
      ),
    },
    {
      q: "Pembayaran",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Pembayaran dapat dilakukan dengan tunai atau transfer bank.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Invoice akan diberikan setelah Pengerjaan layanan selesai.</span>
          </li>
        </ul>
      ),
    },
    {
      q: "Jadwal, Pembatalan & Reschedule",
      a: (
        <ul className="space-y-3 pt-1">
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Jadwal layanan dapat dibuat melalui telepon, WhatsApp, atau website kami.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Proses reschedule yang fleksibel menyesuaikan kembali dengan ketersediaan waktu luang Anda.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#EFF6FF] text-[#2563EB] p-0.5 rounded-sm border-[2px] border-[#1E3A8A] shadow-[2px_2px_0px_0px_#1E3A8A]">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="leading-relaxed">Teknisi kami akan tiba sesuai jarak tempuh. Jika terjadi keterlambatan, kami akan menginformasika kepada anda..</span>
          </li>
        </ul>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight">
          Transparan dari Awal
        </h2>
      </div>

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
    </section>
  );
}
