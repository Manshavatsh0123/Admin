"use client"

import { useState } from "react"
import CourseLayout from "./layout/CourseLayout"
import Basic from "./sections/Basic"
import Overview from "./sections/Overview"
import Pricing from "./sections/Pricing"
import Chapters from "./sections/curriculum/Chapters"

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

  const renderSection = () => {
    switch (section) {
      case "basic":
        return <Basic />
      case "overview":
        return <Overview />
      case "chapters":
        return <Chapters />
      case "pricing":
        return <Pricing />
      default:
        return <Basic />
    }
  }

  return (
    <CourseLayout section={section} setSection={setSection}>
      {renderSection()}
    </CourseLayout>
  )
}