"use client";

import Link from "next/link";
import { ArrowLeft, Snowflake, Wrench, AlertTriangle, Wind } from "lucide-react";
import { buttonBase } from "./components/shared";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8ff] flex flex-col items-center justify-center relative overflow-hidden w-full">
      
      {/* Background Animated Marquee Ribbon 1 */}
      <div className="absolute top-20 -left-10 right-0 w-[120%] bg-[#FACC15] border-y-[4px] border-[#1E3A8A] py-3 rotate-3 z-0 shadow-[0px_6px_0px_0px_#1E3A8A]">
        <motion.div
          className="flex whitespace-nowrap items-center font-black text-[#1E3A8A] tracking-widest text-xl uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">SYSTEM ERROR</span>
              <AlertTriangle className="w-6 h-6 mr-2" />
              <span className="mx-6">404 NOT FOUND</span>
              <Snowflake className="w-6 h-6 mr-2" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Animated Marquee Ribbon 2 */}
      <div className="absolute bottom-16 -left-10 right-0 w-[120%] bg-[#2563EB] border-y-[4px] border-[#1E3A8A] py-3 -rotate-2 z-0 shadow-[0px_6px_0px_0px_#1E3A8A]">
        <motion.div
          className="flex whitespace-nowrap items-center font-black text-white tracking-widest text-xl uppercase"
          animate={{ x: [-1000, 0] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">SYSTEM ERROR</span>
              <Wrench className="w-6 h-6 mr-2" />
              <span className="mx-6">404 NOT FOUND</span>
              <Wind className="w-6 h-6 mr-2" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Icon 1 */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] md:left-[15%] z-10 hidden sm:block"
      >
        <div className="bg-[#DBEAFE] border-[4px] border-[#1E3A8A] p-5 rounded-full shadow-[6px_6px_0px_0px_#1E3A8A]">
          <Snowflake className="w-12 h-12 text-[#2563EB]" />
        </div>
      </motion.div>

      {/* Floating Icon 2 */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[5%] md:right-[15%] z-10 hidden sm:block"
      >
        <div className="bg-[#FACC15] border-[4px] border-[#1E3A8A] p-5 rounded-sm shadow-[6px_6px_0px_0px_#1E3A8A]">
          <Wrench className="w-12 h-12 text-[#1E3A8A]" />
        </div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="max-w-3xl w-[90%] md:w-full bg-white border-[6px] border-[#1E3A8A] shadow-[20px_20px_0px_0px_#1E3A8A] rounded-sm p-8 md:p-16 text-center relative z-20"
      >
        <div className="relative inline-block mb-10">
          <motion.h1 
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-[family-name:var(--font-syne)] text-[6rem] sm:text-[8rem] md:text-[13rem] font-black text-[#1E3A8A] leading-none tracking-tighter"
            style={{ 
              WebkitTextStroke: "6px #1E3A8A", 
              textShadow: "12px 12px 0px #2563EB" 
            }}
          >
            404
          </motion.h1>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-[#FACC15] border-[4px] border-[#1E3A8A] text-[#1E3A8A] font-black text-lg sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 rotate-12 shadow-[6px_6px_0px_0px_#1E3A8A]"
          >
            OOPS!
          </motion.div>
        </div>

        <p className="text-[#434655] font-bold text-lg md:text-xl mb-12 max-w-xl mx-auto">
          Maaf, halaman yang Anda cari tidak ada.
        </p>

        <Link
          href="/"
          className={`${buttonBase} bg-[#2563EB] text-white text-xl px-10 py-5 w-full md:w-auto inline-flex group overflow-hidden relative shadow-[8px_8px_0px_0px_#1E3A8A] border-[4px]`}
        >
          <motion.div 
            className="absolute inset-0 bg-[#1E3A8A]" 
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-3 font-extrabold">
            <ArrowLeft className="w-7 h-7 group-hover:-translate-x-2 transition-transform" />
            Kembali ke Beranda
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
