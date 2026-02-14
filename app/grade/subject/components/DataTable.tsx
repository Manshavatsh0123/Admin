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

  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(
    new Set()
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndexes = new Set(data.map((_, idx) => idx))
      setSelectedRows(allIndexes)
      onSelectRows?.(data)
    } else {
      setSelectedRows(new Set())
      onSelectRows?.([])
    }
  }

  const handleSelectRow = (idx: number, checked: boolean) => {
    const newSelected = new Set(selectedRows)

    if (checked) newSelected.add(idx)
    else newSelected.delete(idx)

    setSelectedRows(newSelected)
    onSelectRows?.(data.filter((_, i) => newSelected.has(i)))
  }

  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
      
      {/* IMPORTANT: table-fixed + w-full */}
      <Table className="w-full table-fixed">

        {/* HEADER */}
        <TableHeader>
          <TableRow className="bg-[#F9F9F9] border-b border-gray-200">

            {selectable && (
              <TableHead className="w-12 text-center">
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
                  text-[14px] font-semibold text-black h-12
                  ${column.width ? column.width : "w-auto"}
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
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >

              {selectable && (
                <TableCell className="text-center">
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
                  className="py-4 text-sm text-gray-800 align-middle"
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
