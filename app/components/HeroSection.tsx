"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { buttonBase } from "./shared";

export function HeroSection() {
  return (
    <section id="beranda" className="relative pt-20 pb-16 px-6 max-w-[1280px] mx-auto z-10">
      <div className="absolute top-10 right-10 grid grid-cols-6 gap-2 opacity-30 z-[-1] hidden md:grid">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#1E3A8A] rounded-full" />
        ))}
      </div>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          className="inline-flex items-center border-2 border-[#1E3A8A] bg-white px-4 py-1.5 rounded-sm shadow-[2px_2px_0px_0px_#1E3A8A] mb-8 font-bold text-xs tracking-wider"
        >
          AC BERSIH • UDARA SEJUK • HIDUP NYAMAN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-[3.4rem] lg:text-[3.75rem] font-extrabold leading-[1.04] sm:leading-[1.06] tracking-tight mb-6 text-[#131b2e]"
        >
          AC Bermasalah? <br />
          <span className="inline-block bg-[#2563EB] text-white px-3 py-1 sm:px-3.5 sm:py-1.5 border-[3px] border-[#1E3A8A] shadow-[6px_6px_0px_0px_#1E3A8A] mt-2 rotate-[-1deg] hover:rotate-0 transition-transform text-[0.8em] sm:text-[0.9em] leading-none">
            Serahkan pada Ahlinya.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium max-w-2xl text-[#434655] mb-4 leading-relaxed"
        >
          Layanan perawatan dan perbaikan AC profesional dengan teknisi berpengalaman. Kami menjamin kualitas dan kepuasan pelanggan dengan harga terbaik.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-base md:text-lg font-semibold max-w-2xl text-[#131b2e] mb-10 leading-relaxed"
        >
          Zen - Filosofi Jepang yang berfokus pada ketenangan, kesederhanaan, dan keseimbangan. Dalam sebuah merek, kata ini memberikan kesan produk yang mampu menghadirkan kenyamanan dan suasana damai di dalam ruangan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a href="#kontak" className={`${buttonBase} bg-[#2563EB] text-white text-lg`}>
            <Calendar className="w-5 h-5" />
            Booking Sekarang
          </a>
          <a href="#harga" className={`${buttonBase} bg-[#DBEAFE] text-[#131b2e] text-lg`}>
            Lihat Layanan
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full"
        >
          {[
            { value: "500+", label: "Pelanggan Puas" },
            { value: "12+", label: "Tahun Pengalaman" },
            { value: "15 Jam", label: "Jam Layanan Admin" },
            { value: "100%", label: "Garansi" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-6 rounded-sm flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E3A8A] transition-all"
            >
              <span className="font-[family-name:var(--font-syne)] text-4xl font-bold text-[#2563EB] text-center">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#434655] uppercase mt-2 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
