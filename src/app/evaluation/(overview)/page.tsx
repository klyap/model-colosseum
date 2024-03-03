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
    console.log("benchmark", benchmark)
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

type EvaluationMetric = {
  metric: string //"Customer Service Triage Quality";
  model: string // "Llama 2";
  modelVersion: string//  "v3-030224";
  prompt: string //"You are assessing whether a given message should have been triaged";
  values: Array<{
    correctOutput: string //"No";
    input: string;
    isCorrect: boolean;
    modelOutput: string //"No";
  }>;
};

function getSpecificBenchmarkData(currentEvalReport: EvaluationReport, modelName: string, benchmarkName: string): Promise<{ [key: string]: any } | undefined> {
  if (!currentEvalReport || !currentEvalReport.evalResults) return Promise.resolve(undefined);
  const specificBenchmark = currentEvalReport.evalResults.find(benchmark => benchmark.model === modelName);
  if (!specificBenchmark) return Promise.resolve(undefined);

  console.log("specificBenchmark", specificBenchmark)

  return Promise.resolve(specificBenchmark);
}

const ResultsTable = ({ currentEvalReport, selectedCell, columnsMap }: { currentEvalReport: EvaluationReport, selectedCell: { column: string | null, row: string | null }, columnsMap: any }) => {
  const [specificBenchmarkData, setSpecificBenchmarkData] = useState<EvaluationMetric | undefined>(undefined);
  const modelName = selectedCell.row ? columnsMap[selectedCell.row] : null;

  useEffect(() => {
    if (!modelName || !selectedCell.column) return

    getSpecificBenchmarkData(currentEvalReport, modelName, selectedCell.column).then((data) => setSpecificBenchmarkData(data as EvaluationMetric));
  }, [currentEvalReport, selectedCell, modelName]);

  const testCaseData = specificBenchmarkData?.values;

  return <div>
    <h2 className="text-lg mt-4">Test Cases</h2>
    <h3 className="text-slate-500 mb-4"> {specificBenchmarkData?.model} on {specificBenchmarkData?.metric} </h3>
    {testCaseData &&
      <table>
        <thead>
          <tr>
            <th className="p-2">Input</th>
            <th className="p-2">Correct Output</th>
            <th className="p-2">Model Output</th>
            <th className="p-2">Is Correct</th>
          </tr>
        </thead>
        <tbody>
          {testCaseData.map((testCase, index) => (
            <tr key={index}>
              <td className="p-2">{testCase.input}</td>
              <td className="p-2">{testCase.correctOutput}</td>
              <td className="p-2">{testCase.modelOutput}</td>
              <td className="p-2">{testCase.isCorrect ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }
  </div>
}

export default function EvaluationDetail({ selectedId }: { selectedId: string }) {
  const id = selectedId;
  const [data, setData] = useState<Benchmark[]>([]);

  const currentEvalReport: EvaluationReport | undefined = evaluations.find(evaluation => evaluation.id === id);
  const [selectedCell, setSelectedCell] = useState<{ column: string | null, row: string | null }>({ column: null, row: null });

  const handleCellClick = (column: string, row: string) => {
    setSelectedCell({ column, row });
    console.log("selectedCell", selectedCell)
  };

  const columnsMap = data.reduce((acc, benchmark, index) => ({
    ...acc,
    [`${index}`]: benchmark.model_name,
  }), {});

  console.log("columnsMap", columnsMap)

  useEffect(() => {
    if (currentEvalReport) {
      const data = [
        {
          model_name: "llama-2-70b-chat",
          benchmark_1: 56.76,
          benchmark_2: 82.18,
          jailbreak: 31.25,
        },
        {
          model_name: "llama-2-13b-chat",
          benchmark_1: 64.86,
          benchmark_2: 91.09,
          jailbreak: 12.50,
        },
        {
          model_name: "mistral-7b-instruct-v0.2",
          benchmark_1: 64.86,
          benchmark_2: 86.14,
          jailbreak: 6.25,
        }
      ] as Benchmark[];
      setData(
        data
      )
      // getData(currentEvalReport).then(setData); // Use async operation to set data
    }
  }, [currentEvalReport]); // Dependency array to avoid unnecessary re-renders

  return (
    <>
      <div className="m-12">
        <h1 className="text-xl">March 2 Evaluation Run</h1>
        <p className="text-slate-500">Benchmarking our latest finetune.</p>

        <div className="mt-8">
          <DataTable columns={columns} data={data} handleCellClick={handleCellClick} />
          {currentEvalReport && selectedCell.column && selectedCell.row && <ResultsTable columnsMap={columnsMap} currentEvalReport={currentEvalReport} selectedCell={selectedCell} />}
        </div>
      </div>
    </>
  );
}
