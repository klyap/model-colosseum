"use client";

import React from "react";
import { benchmarks } from "@/lib/data/benchmarks";

export default function Benchmark() {
  return (
    <div className="px-12 my-12">
      <div className="text-2xl">Customer Service Triage Quality</div>
      <div className="text-sm">
        <div>
          <span className="font-light">Created by</span>
          <span className="font-semibold"> Noah</span>
        </div>
        <div>
          <span className="font-light">Last updated</span>
          <span className="font-semibold"> Today at 10:12 AM</span>
        </div>
      </div>
      <div className="py-8">
        <div className="text-lg font-semibold">Description</div>
        <div className="text-sm text-gray-600 mb-2">
          This is used by our synthetic data generator to create samples that
          are as representative and useful as possible. Please provide any
          rubrics and specify the inputs and outputs that you expect.
        </div>
        <textarea className="w-full p-4 border rounded-md">
          This benchmark measures the effectiveness and efficiency of customer
          service triage systems. It evaluates how well a system can categorize
          and prioritize customer inquiries, ensuring that the most critical
          issues are addressed promptly and accurately.
        </textarea>
        <div className="text-right">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
      <div className="py-8">
        <div className="text-lg font-semibold mb-2">Dataset</div>
        <div className="flex space-x-2 mb-4">
          <button className="px-2 py-1 text-sm bg-gray-600 text-gray-50 rounded hover:bg-gray-300">
            All
          </button>
          <button className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <strong>CSV Upload</strong> (52)
          </button>
          <button className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <strong>Live Users</strong> (612)
          </button>
          <button className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <strong>Synthetic Data</strong> (10k)
          </button>
        </div>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border md:border-none md:table-row">
              <th className="block md:table-cell">Row</th>
              <th className="block md:table-cell">Input</th>
              <th className="block md:table-cell">Output</th>
              <th className="block md:table-cell">Source</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <tr className="border md:border-none md:table-row">
              <td className="block md:table-cell">1</td>
              <td className="block md:table-cell">Sample Input 1</td>
              <td className="block md:table-cell">Sample Output 1</td>
              <td className="block md:table-cell">System</td>
            </tr>
            <tr className="border md:border-none md:table-row">
              <td className="block md:table-cell">2</td>
              <td className="block md:table-cell">Sample Input 2</td>
              <td className="block md:table-cell">Sample Output 2</td>
              <td className="block md:table-cell">User</td>
            </tr>
            <tr className="border md:border-none md:table-row">
              <td className="block md:table-cell">3</td>
              <td className="block md:table-cell">Sample Input 3</td>
              <td className="block md:table-cell">Sample Output 3</td>
              <td className="block md:table-cell">External</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="py-8">
        <div className="text-lg font-semibold mb-2">DEBUG</div>
        <ul>
          {benchmarks.map((benchmark) => (
            <li key={benchmark.id}>{`Benchmark ID: ${benchmark.id}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
