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
  cell?: (value: any) => React.ReactNode
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

  // Select all rows
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

  // Select single row
  const handleSelectRow = (idx: number, checked: boolean) => {
    const newSelected = new Set(selectedRows)

    if (checked) {
      newSelected.add(idx)
    } else {
      newSelected.delete(idx)
    }

    setSelectedRows(newSelected)
    onSelectRows?.(data.filter((_, i) => newSelected.has(i)))
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            {selectable && (
              <TableHead className="w-12">
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
              <TableHead key={column.id} className={column.width}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              onClick={() => onRowClick?.(row)}
              className={
                onRowClick
                  ? "cursor-pointer hover:bg-gray-50"
                  : ""
              }
            >
              {selectable && (
                <TableCell>
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
                <TableCell key={column.id}>
                  {column.cell
                    ? column.cell(row[column.accessorKey])
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
