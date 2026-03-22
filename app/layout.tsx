import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "加算 学習サイト｜障害福祉サービス",
  description:
    "障害福祉サービスの加算を体系的に学べるクイズ付き学習サイト。就労B型・A型・移行・生活介護・放デイの各加算を網羅。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
          加算 学習サイト｜障害福祉サービス
        </footer>
      </body>
    </html>
  );
}
