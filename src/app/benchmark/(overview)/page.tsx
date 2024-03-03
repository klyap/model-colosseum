"use client";

import React, { useState } from "react";
import { benchmarks } from "@/lib/data/benchmarks";
import BenchmarkSidebar from "@/components/ui/BenchmarkSidebar";

export default function Benchmark() {
  return (
    <>
      <BenchmarkSidebar>
        <div className="mx-auto mt-12 text-gray-500 text-center">
          Please select a model
        </div>
      </BenchmarkSidebar>
    </>
  );
}
