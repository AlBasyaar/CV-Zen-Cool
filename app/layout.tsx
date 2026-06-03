import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Service AC Zen'cool | Teknisi AC Terpercaya",
  description: "Layanan servis AC profesional dengan teknisi bersertifikat, respons cepat, dan garansi pekerjaan. Solusi tuntas untuk segala masalah pendingin ruangan Anda.",
  openGraph: {
    title: "Service AC Zen'cool | Teknisi AC Terpercaya",
    description: "Layanan servis AC profesional dengan teknisi bersertifikat, respons cepat, dan garansi pekerjaan.",
    url: "https://zencool.com",
    siteName: "Zen'cool",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zencool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${syne.variable} ${spaceGrotesk.variable} overflow-x-hidden max-w-full`}>
      <body className="font-[family-name:var(--font-space-grotesk)] bg-[#faf8ff] text-[#0F172A] antialiased overflow-x-hidden w-full max-w-full selection:bg-[#2563EB] selection:text-white">
        <div className="overflow-hidden w-full max-w-full flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
