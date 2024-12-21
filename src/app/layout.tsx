import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "AI Hub | Единая подписка на AI-сервисы",
  description: "Первый в СНГ AI Marketplace с единой подпиской на все популярные нейросети. Экономия до 70% на AI-сервисах для бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter tracking-tight antialiased">{children}</body>
    </html>
  );
}
