"use client";

import { benchmarks } from "@/lib/data/benchmarks";

import Link from "next/link";

export default function BenchmarkSidebar({
  selectedId,
  children,
}: {
  selectedId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="w-96 min-w-48 h-100 border-r flex flex-col justify-between">
        <div>
          {benchmarks.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <Link key={b.id} href={`/benchmark/${b.id}`}>
                <div
                  className={`px-4 py-4 border ${
                    isSelected ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="font-semibold text-md">{b.name}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(b.updatedAt).toLocaleString("en-US", {
                      hour12: true,
                      hour: "numeric",
                      minute: "2-digit",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center pb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New
          </button>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
