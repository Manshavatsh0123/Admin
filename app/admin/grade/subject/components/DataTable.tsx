"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Checkbox } from "@/components/ui/checkbox"

export interface ColumnDef {
  id: string
  header: string
  accessorKey: string
  cell?: (value: any, row?: any) => React.ReactNode
  width?: string
}

interface DataTableProps {
  columns: ColumnDef[]
  data: any[]
  onRowClick?: (row: any) => void
  selectable?: boolean
  onSelectRows?: (rows: any[]) => void
}

export function DataTable({
  columns,
  data,
  onRowClick,
  selectable = false,
  onSelectRows,
}: DataTableProps) {

  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set())

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const all = new Set(data.map((_, i) => i))
      setSelectedRows(all)
      onSelectRows?.(data)
    } else {
      setSelectedRows(new Set())
      onSelectRows?.([])
    }
  }

  const handleSelectRow = (idx: number, checked: boolean) => {
    const updated = new Set(selectedRows)

    if (checked) updated.add(idx)
    else updated.delete(idx)

    setSelectedRows(updated)
    onSelectRows?.(data.filter((_, i) => updated.has(i)))
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden card-padding">

      <Table className="w-full">

        {/* HEADER */}
        <TableHeader>
          <TableRow className="bg-[#F9FAFB] border-b border-[#E5E7EB]">

            {selectable && (
              <TableHead className="w-12 px-4">
                <Checkbox
                  checked={
                    data.length > 0 &&
                    selectedRows.size === data.length
                  }
                  onCheckedChange={(checked) =>
                    handleSelectAll(checked === true)
                  }
                />
              </TableHead>
            )}

            {columns.map((column) => (
              <TableHead
                key={column.id}
                className={`
                  px-6 py-4
                  text-[14px]
                  font-semibold
                  text-[#111827]
                  ${column.width ?? ""}
                `}
              >
                {column.header}
              </TableHead>
            ))}

          </TableRow>
        </TableHeader>

        {/* BODY */}
        <TableBody>

          {data.map((row, idx) => (

            <TableRow
              key={idx}
              onClick={() => onRowClick?.(row)}
              className="
                border-b border-[#F1F5F9]
                hover:bg-[#F9FAFB]
                transition-colors
                cursor-pointer
              "
            >

              {selectable && (
                <TableCell className="px-4 py-5">
                  <Checkbox
                    checked={selectedRows.has(idx)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(idx, checked === true)
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                </TableCell>
              )}

              {columns.map((column) => (

                <TableCell
                  key={column.id}
                  className="
                    px-6 py-5
                    text-[14px]
                    text-[#111827]
                    font-normal
                    align-middle
                  "
                >
                  {column.cell
                    ? column.cell(row[column.accessorKey], row)
                    : row[column.accessorKey]}
                </TableCell>

              ))}

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  )
}
