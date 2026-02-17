"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import FAQAccordion, { FAQItem } from "./components/FAQAccordion"
import { StatCard } from "@/components/global/StatCard"
import { FilterSection } from "../grade/subject/components/FilterOption"
import FAQForm from "./components/FAQForm"

const initialFAQs: FAQItem[] = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    category: "Getting Started",
    answer:
      "To enroll in a course, go to the Courses section, select the course you want, and click the Enroll button.",
  },
  {
    id: 2,
    question: "How do I enroll in a course?",
    category: "Billing",
    answer: "Billing answer...",
  },
  {
    id: 3,
    question: "How do I enroll in a course?",
    category: "Technical",
    answer: "Technical answer...",
  },
  {
    id: 4,
    question: "How do I enroll in a course?",
    category: "Curriculum",
    answer: "Technical answer...",
  },
  {
    id: 5,
    question: "How do I enroll in a course?",
    category: "Certification",
    answer: "Technical answer...",
  },
]

export default function FAQPage() {

  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs)

  const handleDelete = (id: number) => {
    setFaqs(prev => prev.filter(f => f.id !== id))
  }

  const handleEdit = (faq: FAQItem) => {
    console.log("Edit FAQ", faq)
  }

  return (
    <>
      <PageInfoBar
        title="FAQ Management"
        description="Manage frequently asked questions"
      />

      <FAQForm />

      <div className="grid grid-cols-4 gap-5 card-padding">
        <StatCard label="Total FAQS" value={5} />
      </div>

      <FilterSection
        searchPlaceholder="Search"
        filters={[
          {
            label: "All Categories",
            options: [
              { label: "Getting Started", value: "getting started" },
              { label: "Billing", value: "billing" },
              { label: "Technical", value: "technical" },
              { label: "Curriculum", value: "curriculum" },
              { label: "Certification", value: "certification" },
            ],
          }
        ]}
      />

      <div className="card-padding">
        <FAQAccordion
          data={faqs}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </>
  )
}
