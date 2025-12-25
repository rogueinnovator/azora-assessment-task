import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Huzaifa - Azora Assessment Task",
  description: "A modern, responsive landing page clone of Setapp built with Next.js 16.1.1, TypeScript, and Tailwind CSS. Created as an assessment task for Azora.group.",
  keywords: ["Setapp", "Next.js", "TypeScript", "Tailwind CSS", "Landing Page", "Azora", "Assessment"],
  authors: [{ name: "Muhammad Huzaifa" }],
  openGraph: {
    title: "Muhammad Huzaifa - Azora Assessment Task",
    description: "A modern, responsive landing page clone of Setapp built with Next.js 16.1.1, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
