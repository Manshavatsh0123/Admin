"use client"

import { useState } from "react"
import { FileText, BookOpen, Tag, ChevronDown } from "lucide-react"
import type { CourseSection } from "../page"

type CourseSidebarProps = {
  section: CourseSection
  setSection: React.Dispatch<React.SetStateAction<CourseSection>>
}

export default function CourseSidebar({ section, setSection }: CourseSidebarProps) {

  const [curriculumOpen, setCurriculumOpen] = useState(false)

  const Item = ({
    id,
    label,
    icon: Icon,
  }: {
    id: CourseSection
    label: string
    icon?: any
  }) => (
    <button
      onClick={() => {
        setSection(id)
        setCurriculumOpen(false)
      }}
      className={`flex items-center gap-2 text-[16px] px-4 py-2 rounded-lg w-full text-left transition ${
        section === id ? "bg-[#BFE3DB] font-medium" : "hover:bg-gray-100"
      }`}
    >
      {Icon && <Icon size={18} />}
      {label}
    </button>
  )

  const SubItem = ({
    id,
    label,
  }: {
    id: CourseSection
    label: string
  }) => (
    <button
      onClick={() => setSection(id)}
      className={`flex items-center gap-2 pl-10 py-2 w-full text-left rounded-lg transition ${
        section === id ? "bg-[#BFE3DB]" : "hover:bg-gray-100"
      }`}
    >
      • {label}
    </button>
  )

  return (
    <div className="w-[220px] space-y-2">

      <Item id="basic" label="Basic" icon={FileText} />
      <Item id="overview" label="Overview" icon={FileText} />

      <button
        onClick={() => setCurriculumOpen(!curriculumOpen)}
        className="flex items-center justify-between px-4 py-2 rounded-lg w-full hover:bg-gray-100"
      >
        <div className="flex items-center gap-2">
          <BookOpen size={18} />
          Curriculum
        </div>

        <ChevronDown
          size={16}
          className={`transition ${curriculumOpen ? "rotate-180" : ""}`}
        />
      </button>

      {curriculumOpen && (
        <div className="space-y-1">
          <SubItem id="chapters" label="Chapters" />
          <SubItem id="topics" label="Topics" />
          <SubItem id="assignment" label="Assignment" />
          <SubItem id="resources" label="Resources" />
          <SubItem id="assessment" label="Assessment" />
        </div>
      )}

      <Item id="pricing" label="Pricing" icon={Tag} />

    </div>
  )
}