"use client"

import PageInfoBar from "@/components/global/PageInfoBar"
import CourseSidebar from "./CourseSidebar"

interface Props {
  children: React.ReactNode
  section: string
  setSection: (s: any) => void
}

export default function CourseLayout({
  children,
  section,
  setSection,
}: Props) {

  return (
    <div className="space-y-6">

      {/* Top Page Header */}
      <PageInfoBar
        title="Course Management"
        description="Create and manage courses"
      />

      {/* Main Layout */}
      <div className="flex gap-4 card-padding">

        <CourseSidebar
          section={section}
          setSection={setSection}
        />

        <div className="flex-1">
          {children}
        </div>

      </div>

    </div>
  )
}