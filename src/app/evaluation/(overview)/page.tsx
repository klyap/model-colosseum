"use client";

import { Benchmark, columns } from "../columns";
import { DataTable } from "../data-table";
import { evaluations } from "@/lib/data/evaluations";
import { useState, useEffect } from "react"

type EvaluationResult = {
  model: string;
  modelVersion: string;
  metric: string;
  prompt: string;
  values: { input: string; modelOutput: string; correctOutput: string; isCorrect: boolean; }[];
};

type EvaluationReport = {
  id: string;
  name: string;
  createdByName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  evalResults: EvaluationResult[];
};

function getData(currentEvalReport: EvaluationReport): Promise<Benchmark[]> {
  if (!currentEvalReport || !currentEvalReport.evalResults) return Promise.resolve([]);
  return Promise.resolve(currentEvalReport.evalResults.map(benchmark => {
    const correctValuesPercentage = benchmark.values.filter(value => value.isCorrect).length / benchmark.values.length * 100;
    return {
      model_name: benchmark.model,
      benchmark_1: correctValuesPercentage,
      benchmark_2: correctValuesPercentage,
      benchmark_3: correctValuesPercentage,
      jailbreak: correctValuesPercentage
    }
  }));
}

export default function EvaluationDetail({ selectedId }: { selectedId: string }) {
  const id = selectedId;
  const [data, setData] = useState<Benchmark[]>([]); // Use state to manage the data

  const currentEvalReport: EvaluationReport | undefined = evaluations.find(evaluation => evaluation.id === id);

  useEffect(() => {
    if (currentEvalReport) {
      getData(currentEvalReport).then(setData); // Use async operation to set data
    }
  }, [currentEvalReport]); // Dependency array to avoid unnecessary re-renders

  return (
    <>
      <div className="m-12">
        <h1 className="text-xl">March 2 Evaluation Run</h1>
        <p className="text-slate-500">Benchmarking our latest finetune.</p>

        <div className="mt-8">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
