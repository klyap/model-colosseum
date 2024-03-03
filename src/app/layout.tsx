"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full flex justify-between bg-gray-300 px-12 py-4 border-b border-gray-300">
          <div className="text-xl font-semibold">
            <Link href="/">Model Colosseum</Link>
          </div>
          <div className="flex gap-8 text-gray-500">
            <div
              className={`text-lg hover:text-gray-800 ${
                path.includes("/benchmark") ? "text-gray-800" : ""
              }`}
            >
              <Link href="/benchmark/1">Benchmarks</Link>
            </div>
            <div
              className={`text-lg hover:text-gray-800 ${
                path.includes("/evaluation") ? "text-gray-800" : ""
              }`}
            >
              <Link href="/evaluation">Evaluations</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
