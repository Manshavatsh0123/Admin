"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface DynamicInputListProps {
  label: string
  placeholder?: string
}

export default function DynamicInputList({
  label,
  placeholder = "Enter value",
}: DynamicInputListProps) {
  const [items, setItems] = React.useState<string[]>(["", ""])

  const addItem = () => {
    setItems([...items, ""])
  }

  const updateItem = (index: number, value: string) => {
    const newItems = [...items]
    newItems[index] = value
    setItems(newItems)
  }

  return (
    <div className="space-y-3">
      <Label className="text-[14px] font-medium">
        {label}
      </Label>

      {items.map((item, index) => (
        <Input
          key={index}
          value={item}
          onChange={(e) => updateItem(index, e.target.value)}
          placeholder={`${placeholder} ${index + 1}`}
          className="h-11"
        />
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full h-9 text-[16px] font-medium bg-white border border-black hover:bg-gray-50"
        onClick={addItem}
      >
        Add more
      </Button>
    </div>
  )
}
