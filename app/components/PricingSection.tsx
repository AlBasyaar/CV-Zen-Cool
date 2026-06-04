"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import { buttonBase } from "./shared";

export function PricingSection() {
  return (
    <section id="harga" className="py-20 px-6 max-w-[1280px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="text-center mb-16">
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight mb-4">
          Harga Layanan
        </h2>
        <p className="text-[#434655] font-medium max-w-2xl mx-auto">
          Berikut adalah daftar harga layanan kami. Kami menawarkan berbagai layanan dengan harga kompetitif.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white border-[3px] border-[#1E3A8A] shadow-[8px_8px_0px_0px_#1E3A8A] rounded-sm p-2 w-full max-w-4xl hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1E3A8A] transition-all">
          <div className="w-full bg-[#DBEAFE] border-[2px] border-[#1E3A8A] overflow-hidden rounded-sm relative">

            <img 
              src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1780459467/Paket_Service_AC_y3sq0j.png" 
              alt="Daftar Harga Layanan" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
