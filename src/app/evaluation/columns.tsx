/* eslint-disable react/no-unescaped-entities */
"use client"

import { Column, ColumnDef, Row } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Benchmark = {
  model_name: string,
  benchmark_1: number,
  benchmark_2: number,
  benchmark_3: number,
  jailbreak: number,
}

const scoreCell = ({ row, column }: { row: Row<Benchmark>; column: Column<Benchmark> }) => {
  const columnName = column.id || "";
  const amount = parseFloat(row.getValue(columnName))

  return <div className="text-lg text-center">{amount}</div>
}

const modelNameCell = ({ row }: { row: Row<Benchmark> }) => {
  const modelName = row.getValue("model_name") as string
  const prompt = "You are a customer service agent"
  return <div className="w-48">
    <div>{modelName}</div>
    <div className="text-gray-500">{"v3-030224"}</div>
    <div className="text-gray-500 truncate">"{prompt}"</div>

  </div>
}

const sortableHeader = (headerName: string) => {
  const HeaderComponent = ({ column }: { column: Column<Benchmark> }) => {
    return (
      <div style={{ maxWidth: "150px" }}>
        <Button
          variant="ghost"
          className="whitespace-normal"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {headerName}
          <ArrowUpDown className="ml-2 h-4 w-36" />
        </Button>
      </div>
    )
  }
  HeaderComponent.displayName = `SortableHeader_${headerName.replace(/\s+/g, '_')}`;
  return HeaderComponent;
}

export const columns: ColumnDef<Benchmark>[] = [
  {
    accessorKey: "model_name",
    header: "",
    cell: modelNameCell
  },
  {
    accessorKey: "benchmark_1",
    header: sortableHeader("Customer Service Triage Quality"),
    cell: scoreCell
  },
  {
    accessorKey: "benchmark_2",
    header: sortableHeader("Customer Service Live SBS"),
    cell: scoreCell
  },
  {
    accessorKey: "benchmark_3",
    header: sortableHeader("Off-brand responses"),
    cell: scoreCell
  },
  {
    accessorKey: "jailbreak",
    header: sortableHeader("Superfresh Jailbreaks"),
    cell: scoreCell
  },
]