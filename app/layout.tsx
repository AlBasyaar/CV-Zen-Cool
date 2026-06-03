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
  title: "Service AC CV Zen'cool | Teknisi AC Terpercaya",
  description: "AC Bermasalah? Serahkan pada Ahlinya. Kami kembalikan performa dingin AC Anda lewat penanganan cepat dan transparan. Standar kerja tinggi, hasil kerja pasti.",
  openGraph: {
    title: "Service AC CV Zen'cool | Teknisi AC Terpercaya",
    description: "AC Bermasalah? Serahkan pada Ahlinya. Penanganan cepat, transparan, dan hasil kerja pasti bergaransi.",
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
  icons: {
    icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1769828376/Logo_Zencool_pmyw1u.jpg",
    shortcut: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1769828376/Logo_Zencool_pmyw1u.jpg",
    apple: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1769828376/Logo_Zencool_pmyw1u.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${syne.variable} ${spaceGrotesk.variable} overflow-x-clip max-w-full`}>
      <body className="font-[family-name:var(--font-space-grotesk)] bg-[#faf8ff] text-[#0F172A] antialiased overflow-x-clip w-full max-w-full selection:bg-[#2563EB] selection:text-white">
        <div className="overflow-x-clip w-full max-w-full flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
