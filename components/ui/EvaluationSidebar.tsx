"use client";

import { evaluations } from "@/lib/data/evaluations";

import Link from "next/link";

export default function EvaluationSidebar({
  selectedId,
  children,
}: {
  selectedId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row min-h-96">
      <div className="w-96 max-w-96 h-100 border-r flex flex-col justify-between">
        <div>
          {evaluations.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <Link key={b.id} href={`/evaluation/${b.id}`}>
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
