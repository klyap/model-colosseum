"use client";

import React, { useState } from "react";
import { benchmarks } from "@/lib/data/benchmarks";
import BenchmarkSidebar from "@/components/ui/BenchmarkSidebar";

export default function Benchmark({ params }: { params: { id: string } }) {
  const [dataFilter, setDataFilter] = React.useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const benchmark = benchmarks.find((i) => i.id === params.id);
  if (!benchmark) {
    throw new Error(`no benchmark with id=${params.id}`);
  }

  const filteredData = benchmark?.data.filter(
    (item) => dataFilter === "All" || item.source === dataFilter
  );

  const pageCount = Math.ceil((filteredData?.length ?? 0) / itemsPerPage);
  const data = filteredData?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const sourceCounts = benchmark?.data.reduce(
    (acc: { [key: string]: number }, item) => {
      acc[item.source] = (acc[item.source] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <BenchmarkSidebar selectedId={params.id}>
        <div className="w-full px-12 my-12">
          <div className="text-2xl mb-1">Customer Service Triage Quality</div>
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
              {sourceCounts &&
                Object.keys(sourceCounts).map((source) => (
                  <button
                    key={source}
                    onClick={() => setDataFilter(source)}
                    className={`px-2 py-1 text-sm rounded ${
                      dataFilter === source
                        ? "bg-gray-500 text-gray-50 hover:bg-gray-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <strong>
                      {source.charAt(0).toUpperCase() + source.slice(1)}
                    </strong>{" "}
                    ({sourceCounts ? sourceCounts[source] : "0"})
                  </button>
                ))}
            </div>
            <table className="w-full border-collapse block md:table">
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
                    <td>{idx + 1 + currentPage * itemsPerPage}</td>
                    <td className="truncate max-w-xs pr-4">{datum.input}</td>
                    <td>{datum.output}</td>
                    <td>{datum.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 0}
                className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {currentPage + 1} of {pageCount}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount - 1}
                className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </BenchmarkSidebar>
    </>
  );
}
