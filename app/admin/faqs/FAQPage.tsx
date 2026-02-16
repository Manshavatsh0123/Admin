"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import FAQAccordion, { FAQItem } from "./components/FAQAccordion"

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
