"use client";

export function GallerySection() {
  // Ganti link-link di bawah dengan link foto dari Cloudinary Anda
  const galleryItems = [
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Pembersihan AC Split" },
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Instalasi AC Baru" },
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Perbaikan AC overhool" },
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Pengelasan evapulator" },
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Penggantian Kapasitor" },
    { image: "https://res.cloudinary.com/demo/image/upload/", title: "Pembersihan Outdoor" },
  ];

  return (
    <div className="w-full border-t-[3px] border-[#1E3A8A]">
      <section id="galeri" className="py-20 px-6 max-w-[1280px] mx-auto">
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
            <div className="bg-[#DBEAFE] border-[2px] border-[#1E3A8A] h-48 md:h-64 flex items-center justify-center overflow-hidden relative group-hover:border-b-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-2 text-center font-bold text-sm md:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}
