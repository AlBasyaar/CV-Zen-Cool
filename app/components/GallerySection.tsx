"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function GallerySection() {
  // Ganti link-link di bawah dengan link foto dari Cloudinary Anda
  const galleryItems = [
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544781/4db3a0c5-6f10-4493-b34d-5d4dc5eb63cd_rr8dpp.jpg",
      title: "Pembersihan AC Split",
      description: "Pembersihan unit indoor untuk menjaga performa pendinginan dan kualitas udara.",
      pos: "50% 40%",
    },
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544573/342641db-68c9-4e67-8402-9a56da3fd5de_omwjab.jpg",
      title: "Instalasi & Pasang AC Baru",
      description: "Pemasangan unit baru dilakukan dengan standar kerja yang rapi dan aman.",
      pos: "50% 50%",
    },
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544065/a3e67317-e6f6-408d-9113-495f19aec13f_eb2vnw.jpg",
      title: "Perbaikan AC overhool",
      description: "Perbaikan menyeluruh untuk mengembalikan fungsi AC secara optimal.",
      pos: "50% 90%",
    },
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544822/c1f54e5b-6bd4-4e63-a183-f0874679c10a_qrruju.jpg",
      title: "Perbaikan & Pengelasan evaporator",
      description: "Penanganan evaporator untuk memastikan sistem bekerja kembali dengan baik.",
      pos: "50% 50%",
    },
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544936/copy_of_88569e4a-e7cc-46a1-838f-85e760be94b3_zcrn0m.jpg",
      title: "Isi & Tambah Freon",
      description: "Pengisian refrigeran sesuai kebutuhan untuk menjaga daya dingin AC.",
      pos: "50% 50%",
    },
    {
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1780544413/750ba920-6025-48cd-b53e-1b67c0ea2bc5_uhl7ug.jpg",
      title: "Pembersihan Outdoor",
      description: "Perawatan unit outdoor agar sirkulasi tetap lancar dan efisien.",
      pos: "50% 40%",
    },
  ];

  return (
    <div className="w-full border-t-[3px] border-[#1E3A8A]">
      <section id="galeri" className="py-20 px-6 max-w-[1280px] mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#131b2e] tracking-tight mb-4">
            Galeri Pekerjaan Kami
          </h2>
          <p className="text-[#434655] font-medium max-w-2xl mx-auto">
            Lihat hasil kerja tim teknisi profesional kami dalam memberikan layanan perawatan AC terbaik.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="group bg-white border-[3px] border-[#1E3A8A] shadow-[4px_4px_0px_0px_#1E3A8A] p-2 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1E3A8A] transition-all rounded-sm flex flex-col"
          >
            <div className="bg-[#DBEAFE] border-[2px] border-[#1E3A8A] h-64 md:h-80 flex items-center justify-center overflow-hidden relative group-hover:border-b-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
              <Image src={item.image} alt={item.title} fill style={{ objectPosition: item.pos || 'center' }} className="absolute inset-0 object-cover z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-2 text-center font-bold text-sm md:text-base">
              {item.title}
            </div>
            <div className="px-2 pb-2 text-center text-xs md:text-sm leading-relaxed text-[#434655]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
        </motion.div>
      </section>
    </div>
  );
}
