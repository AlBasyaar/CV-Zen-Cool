"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "Prosedur Booking",
      a: "Anda dapat memesan melalui formulir di website kami atau langsung menekan tombol WhatsApp. Tim kami akan mengkonfirmasi jadwal kedatangan teknisi maksimal 15 menit setelah pesanan masuk.",
    },
    {
      q: "Garansi Pekerjaan",
      a: "Kami memberikan garansi 30 hari untuk setiap layanan servis lengkap dan perbaikan. Jika masalah yang sama muncul kembali dalam masa garansi, perbaikan selanjutnya gratis.",
    },
    {
      q: "Pembatalan & Reschedule",
      a: "Pembatalan atau perubahan jadwal gratis jika dilakukan minimal 2 jam sebelum teknisi tiba. Silakan hubungi CS kami via WhatsApp untuk perubahan.",
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
