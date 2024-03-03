"use client";

import React from "react";
import { benchmarks } from "@/lib/data/benchmarks";
import BenchmarkSidebar from "@/components/ui/BenchmarkSidebar";

export default function Benchmark({ params }: { params: { id: string } }) {
  const [dataFilter, setDataFilter] = React.useState("All");

  const benchmark = benchmarks.find((i) => i.id === params.id);

  if (!benchmark) {
    throw new Error(`Layer with id=${params.id} is not present.`);
  }

  const data = benchmark?.data.filter(
    (item) => dataFilter === "All" || item.source === dataFilter
  );

  const sourceCounts = benchmark?.data.reduce(
    (acc: { [key: string]: number }, item) => {
      acc[item.source] = (acc[item.source] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  return (
    <>
      <BenchmarkSidebar selectedId={params.id}>
        <div className="px-12 my-12">
          <div className="text-2xl mb-1">{benchmark?.name}</div>
          <div className="text-sm">
            <div>
              <span className="font-light">Created by</span>
              <span className="font-semibold"> {benchmark?.createdByName}</span>
            </div>
            <div>
              <span className="font-light">Last updated</span>
              <span className="font-semibold">
                {" "}
                {benchmark?.updatedAt &&
                  new Date(benchmark.updatedAt).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
              </span>
            </div>
          </div>
          <div className="py-8">
            <div className="text-lg font-semibold">Description</div>
            <div className="text-sm text-gray-500 mb-2">
              This is used by our synthetic data generator to create samples
              that are as representative and useful as possible. Please provide
              any rubrics and specify the inputs and outputs that you expect.
            </div>
            <textarea
              className="w-full p-4 border rounded-md"
              defaultValue={benchmark?.description}
            />
            <div className="text-right">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded opacity-50"
                disabled
              >
                Save
              </button>
            </div>
          </div>
          <div className="py-4">
            <div className="text-lg font-semibold mb-2">Dataset</div>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setDataFilter("All")}
                className={`px-2 py-1 text-sm rounded ${
                  dataFilter === "All"
                    ? "bg-gray-500 text-gray-50 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <strong>All</strong> ({benchmark?.data.length || "0"})
              </button>
              <button
                onClick={() => setDataFilter("csv")}
                className={`px-2 py-1 text-sm rounded ${
                  dataFilter === "csv"
                    ? "bg-gray-500 text-gray-50 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <strong>CSV Upload</strong> ({sourceCounts?.["csv"] || "0"})
              </button>
              <button
                onClick={() => setDataFilter("live")}
                className={`px-2 py-1 text-sm rounded ${
                  dataFilter === "live"
                    ? "bg-gray-500 text-gray-50 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <strong>Live Users</strong> ({sourceCounts?.["live"] || "0"})
              </button>
              <button
                onClick={() => setDataFilter("synthetic")}
                className={`px-2 py-1 text-sm rounded ${
                  dataFilter === "synthetic"
                    ? "bg-gray-500 text-gray-50 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <strong>Synthetic Data</strong> (
                {sourceCounts?.["synthetic"] || "0"})
              </button>
            </div>
            <table className="border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border md:border-none md:table-row">
                  <th className="block md:table-cell">Row</th>
                  <th className="block md:table-cell">Input</th>
                  <th className="block md:table-cell">Output</th>
                  <th className="block md:table-cell">Source</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {data?.map((datum, idx) => (
                  <tr key={`key=${idx}`}>
                    <td>{idx}</td>
                    <td>
                      {datum.input.length > 50
                        ? `${datum.input.substring(0, 47)}...`
                        : datum.input}
                    </td>
                    <td>{datum.output}</td>
                    <td>{datum.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </BenchmarkSidebar>
    </>
  );
}
