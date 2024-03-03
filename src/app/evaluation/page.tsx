import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const benchmarks = [
  "Customer Service Triage Quality Offline ⬇️",
  "Customer Service Live SBS",
  "Off-brand responses",
  "Superfresh Jailbreaks"
]

interface ModelScores {
  [key: string]: { version: string };
}
const modelsAndScores: ModelScores = {
  "llama_7b_internal_030224_v2_final": { version: "v3-030224" },
  "Mixtral 8x7B": { version: "v3-030224" },
  "Mistral 7B": { version: "v3-030224" },
  "GPT4": { version: "v3-030224" },
}

export default function Evaluation() {
  return <>
    <div className="m-12">
      <h1 className="text-xl">March 2 Evaluation Run</h1>
      <p className="text-slate-500">Benchmarking our latest finetune.</p>

      <Table className="mt-8">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead key={"model-name"}></TableHead>

            {benchmarks.map((benchmarkName) =>
              <TableHead key={benchmarkName}>{benchmarkName}</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(modelsAndScores).map((model) => (
            <TableRow key={model}>
              <TableCell className="font-bold">
                <div className="flex flex-col">
                  <div className="">{model}</div>
                  <div className="text-slate-500 text-xs">{modelsAndScores[model].version}</div>
                </div>
              </TableCell>
              <TableCell className="text-lg">
                80
              </TableCell>
              <TableCell className="text-lg">
                89
              </TableCell>
              <TableCell className="text-lg">
                71
              </TableCell>
              <TableCell className="text-lg">
                72
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </>;
}
