import React from "react";
import { benchmarks } from "@/lib/data/benchmarks";

export default function Benchmark() {
  return (
    <>
      <div>Benchmark list page</div>
      <ul>
        {benchmarks.map((benchmark) => (
          <li key={benchmark.id}>{`Benchmark ID: ${benchmark.id}`}</li>
        ))}
      </ul>
    </>
  );
}
