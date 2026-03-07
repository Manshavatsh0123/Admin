"use client"

import { useState } from "react"
import CourseLayout from "./layout/CourseLayout"
import Overview from "./sections/overview/page"
import CourseBasicForm from "./sections/basic/page"
import PricingForm from "./sections/pricing/page"
import Topics from "./sections/curriculum/topics/page"
import AssignmentPage from "./sections/curriculum/assignment/page"
import Resources from "./sections/curriculum/resources/page"
import AssessmentPage from "./sections/curriculum/assessment/page"
import ChaptersPage from "./sections/curriculum/chapters/page"

export type CourseSection =
  | "basic"
  | "overview"
  | "chapters"
  | "topics"
  | "assignment"
  | "resources"
  | "assessment"
  | "pricing"

export default function Page() {

  const [section, setSection] = useState<CourseSection>("basic")

  const sections: Record<CourseSection, React.ReactNode> = {
    basic: <CourseBasicForm />,
    overview: <Overview />,
    chapters: <ChaptersPage />,
    topics: <Topics />,
    assignment: <AssignmentPage />,
    resources: <Resources />,
    assessment: <AssessmentPage />,
    pricing: <PricingForm />,
  }

  return (
    <CourseLayout section={section} setSection={setSection}>
      {sections[section]}
    </CourseLayout>
  )
}