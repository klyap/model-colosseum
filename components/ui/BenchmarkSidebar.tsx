"use client";

import { benchmarks } from "@/lib/data/benchmarks";

import Link from "next/link";

export default function BenchmarkSidebar({
  selectedId,
  children,
}: {
  selectedId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="w-96 h-screen border-r">
        {benchmarks.map((b) => {
          const isSelected = b.id === selectedId;
          return (
            <Link href={`/benchmark/${b.id}`}>
              <div
                key={b.id}
                className={`px-4 py-4 border ${
                  isSelected ? "bg-gray-100" : ""
                }`}
              >
                <div className="font-semibold text-md">{b.name}</div>
                <div className="text-sm text-gray-600">
                  {new Date(b.updatedAt).toLocaleString()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
}
