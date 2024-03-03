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
        <nav className="w-full flex justify-between bg-gray-100 px-12 py-4 border-b border-gray-300">
          <div className="text-xl font-semibold">
            <Link href="/">Model Colosseum</Link>
          </div>
          <div className="flex gap-8">
            <div
              className={`text-lg hover:text-blue-600 ${
                path.includes("/benchmark") ? "text-blue-600" : ""
              }`}
            >
              <Link href="/benchmark">Benchmarks</Link>
            </div>
            <div
              className={`text-lg hover:text-blue-600 ${
                path.includes("/evaluation") ? "text-blue-600" : ""
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
