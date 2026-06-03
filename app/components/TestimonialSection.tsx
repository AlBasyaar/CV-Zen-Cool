"use client";

import { Star } from "lucide-react";
import { cardBase } from "./shared";

export function TestimonialSection() {
  const testimonials = [
    {
      text: "Teknisi dari Zen'Cool sangat profesional dan tepat waktu. AC saya yang sudah tidak dingin kembali seperti baru setelah diservis. Mereka juga memberikan tips perawatan yang sangat berguna. Pasti akan menggunakan jasa mereka lagi!.",
      author: "BUDI SANTOSO",
      location: "Jakarta",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop"
    },
    {
      text: "Saya sangat puas dengan layanan Zen'Cool. Mereka merespons dengan cepat saat AC kantor kami bermasalah. Teknisinya ramah, kompeten, dan memberikan solusi yang tepat. Harganya juga sangat kompetitif dibandingkan penyedia jasa lainnya. Sangat direkomendasikan!.",
      author: "SITI RAHAYU",
      location: "Bekasi",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop"
    },
    {
      text: "Sudah 3 tahun langganan Zen'Cool untuk maintenance AC di rumah. Selalu puas dengan hasilnya. AC jadi lebih awet dan jarang bermasalah. Teknisinya juga selalu menjelaskan dengan detail apa yang mereka kerjakan. Sangat direkomendasikan!.",
      author: "ANDI PRATAMA",
      location: "Pondok Gede",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&h=150&fit=crop"
    },
  ];

  return (
    <section id="testimoni" className="py-20 px-6 bg-[#2563EB] border-y-[3px] border-[#1E3A8A] shadow-[0px_8px_0px_0px_#1E3A8A]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-4">
            Mereka Sudah Buktikan
          </h2>
          <p className="text-white/90 font-medium max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa yang dikatakan pelanggan tentang layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={`${cardBase} flex flex-col justify-between hover:-translate-y-2 transition-transform`}>
              <div>
                <div className="text-5xl font-[family-name:var(--font-syne)] text-[#2563EB] leading-none mb-2">
                  &ldquo;
                </div>
                <p className="font-medium text-[#434655] text-sm md:text-base italic mb-6">
                  {t.text}
                </p>
              </div>
              <div className="border-t-[2px] border-[#1E3A8A] pt-4 flex items-center gap-3 mt-4">
                <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full border-[2px] border-[#1E3A8A] object-cover bg-[#DBEAFE]" />
                <div>
                  <div className="font-bold text-xs tracking-widest text-[#131b2e] uppercase">
                    {t.author}
                  </div>
                  <div className="text-[11px] font-medium text-[#434655] mb-1">
                    {t.location}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
