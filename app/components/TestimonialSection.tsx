"use client";

import { cardBase } from "./shared";

export function TestimonialSection() {
  const testimonials = [
    {
      text: "Teknisi datang tepat waktu. Pengerjaan cepat dan rapi. AC saya yang tadinya cuma keluar angin doang sekarang dingin menggigil.",
      author: "BUDI SANTOSO",
    },
    {
      text: "Harga sesuai dengan yang di website, gak ada biaya tambahan aneh-aneh. Garansi juga jelas, seminggu setelah servis AC agak bocor dikit langsung datang perbaiki gratis.",
      author: "SITI RAHAYU",
    },
    {
      text: "Pelayanan mantap jiwa. Teknisi ramah dan edukatif, dikasih tau tips biar AC lebih awet. Bakal langganan terus sih ini mah.",
      author: "ANDI PRATAMA",
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
              <div className="font-bold text-xs tracking-widest text-[#131b2e] uppercase border-t-[2px] border-[#1E3A8A] pt-4">
                - {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
