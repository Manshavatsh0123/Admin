"use client"

import { useState } from "react"
import { ChevronDown, Pencil, Trash2 } from "lucide-react"

export interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

interface FAQAccordionProps {
  data: FAQItem[]
  onEdit?: (faq: FAQItem) => void
  onDelete?: (id: number) => void
}

export default function FAQAccordion({
  data,
  onEdit,
  onDelete,
}: FAQAccordionProps) {

  const [expandedId, setExpandedId] = useState<number | null>(data[0]?.id ?? null)

  const toggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-2">

      {data.map((faq) => {

        const isOpen = expandedId === faq.id

        return (
          <div
            key={faq.id} className="rounded-[10px] bg-white px-4 border">

            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left ">
              <div>


                <p className="text-[16px] font-semibold text-black">
                  {faq.question}
                </p>

                <span className="inline-block mt-2 px-3 py-1 text-[#CE371F] text-[12px] font-medium rounded-full bg-[#D33122]/10">
                  {faq.category}
                </span>

              </div>

              <ChevronDown size={20} strokeWidth={1.5} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />

            </button>


            {/* BODY */}
            {isOpen && (
              <div className="px-5 pb-4">

                <p className="text-[16px] text-[#1E292B] mb-4">
                  {faq.answer}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4">

                  <button onClick={() => onEdit?.(faq)} className="text-black hover:text-gray-600" >
                    <Pencil size={16} strokeWidth={1.5} />
                  </button>

                  <button onClick={() => onDelete?.(faq.id)} className="text-[#CE371F] hover:text-red-700">
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>

                </div>

              </div>
            )}

          </div>
        )
      })}
    </div>
  )
}
