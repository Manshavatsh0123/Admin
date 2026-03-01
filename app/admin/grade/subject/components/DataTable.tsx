"use client"

import React from "react"

export type ColumnDef<T> = {
  id: string
  header: string
  accessorKey: keyof T
  cell?: (value: T[keyof T], row: T) => React.ReactNode
}

interface DataTableProps<T> {
  columns: ColumnDef<T>[]
  data: T[]
}

export function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white card-padding">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="px-4 py-3 font-medium text-gray-700">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((column) => {
                const value = row[column.accessorKey]

                return (
                  <td key={column.id} className="px-4 py-4">
                    {column.cell
                      ? column.cell(value, row)
                      : String(value)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}