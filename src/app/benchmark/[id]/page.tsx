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
        <div className="w-full p-12 bg-gradient-to-r from-indigo-50 to-indigo-100">
          <div className="text-2xl font-medium mb-1">
            Customer Service Triage Quality
          </div>
          <div className="text-xs flex flex-row space-x-2">
            <div>
              <span className="font-light text-gray-500">Created by</span>
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
          <div className="mt-4">
            <InfoCards />
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-2  pb-1">
              <div className="text-md font-semibold">Description</div>
              <button
                onClick={() => alert("Coming soon!")}
                className="px-2 py-0.5 text-xs bg-gray-200 text-gray-800 rounded cursor-pointer"
              >
                Edit
              </button>
            </div>
            <div className="bg-white rounded-sm p-4 shadow">
              <div className="text-sm text-gray-700">
                {benchmark?.description}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2  pb-1">
              <div className="text-md font-semibold">Best Prompt</div>
              <button
                onClick={() => alert("Coming soon!")}
                className="px-2 py-0.5 text-xs bg-gray-200 text-gray-800 rounded cursor-pointer"
              >
                More
              </button>
            </div>
            <div className="bg-white rounded-sm p-4 shadow">
              <div className="text-sm text-gray-700">
                {benchmark?.bestPrompt?.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div className="text-md font-semibold pb-1">Data</div>
            <div className="p-3 bg-white rounded-sm shadow">
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
              <table className="w-full border-collapse block md:table text-sm">
                <thead className="block md:table-header-group">
                  <tr className="border md:border-none md:table-row">
                    <th className="block text-left md:table-cell">Row</th>
                    <th className="block text-left md:table-cell">Input</th>
                    <th className="block text-left md:table-cell">Output</th>
                    <th className="block text-left md:table-cell">Source</th>
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
        </div>
      </BenchmarkSidebar>
    </>
  );
}

function InfoCard({
  cardInfo,
}: {
  cardInfo: {
    title: string;
    value: string;
    valueUnit: string;
    status: string;
    buttonText: string;
    buttonType: string;
  };
}) {
  return (
    <div className="bg-white rounded-sm flex flex-col shadow w-48">
      <div className="p-3">
        <div className="text-xs font-medium text-gray-400 uppercase mb-3">
          {cardInfo.title}
        </div>
        <div className="flex flex-row space-x-1">
          <div className="text-4xl font-semibold">{cardInfo.value}</div>
          <div className="mt-auto text-gray-400">{cardInfo.valueUnit}</div>
        </div>
        <div className="text-xs pt-2 text-gray-400">{cardInfo.status}</div>
      </div>
      <div
        className={`text-sm ${
          cardInfo.buttonType === "primary"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-700"
        }  w-full text-center cursor-pointer py-1 rounded-b-sm`}
      >
        {cardInfo.buttonText}
      </div>
    </div>
  );
}

function InfoCards() {
  return (
    <div className="flex flex-row space-x-2">
      <InfoCard
        cardInfo={{
          title: "CSV Upload",
          value: "50",
          valueUnit: "rows",
          status: "🟡 100 rows needed",
          buttonText: "Add",
          buttonType: "primary",
        }}
      />
      <InfoCard
        cardInfo={{
          title: "Product",
          value: "150",
          valueUnit: "rows",
          status: "🟢 Live",
          buttonText: "Add Integration",
          buttonType: "secondary",
        }}
      />
      <InfoCard
        cardInfo={{
          title: "Synthetic",
          value: "1k",
          valueUnit: "rows",
          status: "🟡 +19k recommended",
          buttonText: "Generate",
          buttonType: "primary",
        }}
      />
      <InfoCard
        cardInfo={{
          title: "Best Performance",
          value: "85",
          valueUnit: "%",
          status: "Mistral 7B",
          buttonText: "More",
          buttonType: "secondary",
        }}
      />
    </div>
  );
}
