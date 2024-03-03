"use client";

import type { Metadata } from "next";
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
        <nav className="w-full flex justify-end">
          <ul className="flex list-none m-0 p-0 gap-4">
            <li
              className={`text-lg hover:text-blue-600 ${
                path.includes("/benchmark") ? "text-blue-600" : ""
              }`}
            >
              <Link href="/benchmark">Benchmarks</Link>
            </li>
            <li
              className={`text-lg hover:text-blue-600 ${
                path.includes("/evaluation") ? "text-blue-600" : ""
              }`}
            >
              <Link href="/evaluation">Evaluations</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
