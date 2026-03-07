"use client"

import React, { useState } from "react"
import { Pencil, Trash2, ChevronDown, ChevronUp, Plus } from "lucide-react"
import AppButton from "@/components/global/Button"

type Section = {
  title: string
  points: string[]
}

export default function Overview() {

  const [sections] = useState<Section[]>([
    {
      title: "About the Course",
      points: [
        "Master advanced mathematical concepts including algebra, geometry, and trigonometry. Perfect for students preparing for competitive exams."
      ]
    },
    {
      title: "What You'll Learn",
      points: [
        "Advanced Algebraic Manipulations",
        "Geometric proofs and theorems"
      ]
    },
    {
      title: "Course Objectives",
      points: [
        "Understand advanced algebraic equations",
        "Master geometric theorems and proofs"
      ]
    }
  ])

  const [openSections, setOpenSections] = useState<number[]>([0])

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index))
    } else {
      setOpenSections([...openSections, index])
    }
  }

  return (
    <div className="px-10">

      <div className="space-y-4">

        {sections.map((section, index) => {

          const isOpen = openSections.includes(index)

          return (
            <div key={index} className="space-y-3">

              {/* Section Header */}
              <div
                onClick={() => toggleSection(index)}
                className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white cursor-pointer hover:bg-gray-50 transition"
              >
                <p className="font-medium text-[15px]">
                  {section.title}
                </p>

                <div className="flex items-center gap-4">

                  <Pencil
                    size={16}
                    className="cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />

                  <Trash2
                    size={16}
                    className="text-[#D33122] cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {isOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}

                </div>
              </div>

              {/* Points (Dropdown Content) */}
              {isOpen &&
                section.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white"
                  >
                    <p className="text-[14px] text-gray-700">
                      {point}
                    </p>

                    <div className="flex items-center gap-4">

                      <Pencil size={16} className="cursor-pointer" />

                      <Trash2
                        size={16}
                        className="text-[#D33122] cursor-pointer"
                      />

                    </div>
                  </div>
                ))}
            </div>
          )
        })}

        {/* Attractive Buttons */}
        <div className="flex items-center gap-4 pt-4">

          <button className="flex items-center gap-2 bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition">
            <Plus size={16} />
            New Section
          </button>

          <button className="flex items-center gap-2 bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition">
            <Plus size={16} />
            New Key Point
          </button>

        </div>

        {/* Footer Buttons */}
        <div className="flex items-center gap-4 pt-6">

          <AppButton
            type="submit"
            ctaText="Create Coupon"
            showIcon={false}
            className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
          />

          <AppButton
            type="button"
            ctaText="Cancel"
            variant="outline"
            showIcon={false}
            className="px-5 py-2 rounded-lg text-[14px]"
          />

        </div>

      </div>

    </div>
  )
}