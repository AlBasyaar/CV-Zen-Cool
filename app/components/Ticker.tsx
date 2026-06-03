"use client";

import { motion } from "framer-motion";
import { Wrench, Star, Briefcase } from "lucide-react";

export function Ticker() {
  return (
    <div className="w-full bg-[#1E3A8A] border-y-[3px] border-[#1E3A8A] overflow-hidden py-3 shadow-[0px_4px_0px_0px_#1E3A8A]">
      <motion.div
        className="flex whitespace-nowrap items-center text-white font-bold tracking-widest text-sm w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
      >
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6">◆</span>
            <span>Bergaransi</span>
            <span className="mx-6">◆</span>
            <Wrench className="w-4 h-4 mr-2" />
            <span>Respons {"<2 Jam"}</span>
            <span className="mx-6">◆</span>
            <Star className="w-4 h-4 mr-2 fill-current" />
            <span>Rating 4.8</span>
            <span className="mx-6">◆</span>
            <Briefcase className="w-4 h-4 mr-2" />
            <span>Teknisi Berpengalaman</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
