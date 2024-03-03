import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Benchmark, columns } from "../columns";
import { DataTable } from "../data-table";

const benchmarks = [
  "Customer Service Triage Quality Offline ⬇️",
  "Customer Service Live SBS",
  "Off-brand responses",
  "Superfresh Jailbreaks",
];

interface ModelScores {
  [key: string]: { version: string };
}
const modelsAndScores: ModelScores = {
  llama_7b_internal_030224_v2_final: { version: "v3-030224" },
  "Mixtral 8x7B": { version: "v3-030224" },
  "Mistral 7B": { version: "v3-030224" },
  GPT4: { version: "v3-030224" },
};

async function getData(): Promise<Benchmark[]> {
  // Fetch data from your API here.
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  return [
    {
      model_name: "Llama 2",
      benchmark_1: randomInt(70, 99),
      benchmark_2: randomInt(70, 99),
      benchmark_3: randomInt(70, 99),
      jailbreak: randomInt(70, 99),
    },
    {
      model_name: "Llama 2",
      benchmark_1: randomInt(70, 99),
      benchmark_2: randomInt(70, 99),
      benchmark_3: randomInt(70, 99),
      jailbreak: randomInt(70, 99),
    },
    // ...
  ];
}

export default async function EvaluationDetail() {
  const data = await getData();

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
