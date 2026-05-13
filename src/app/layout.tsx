import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Клуб четырех коней — Васюкинский турнир",
  description: "Лендинг Международного васюкинского турнира по шахматам",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
