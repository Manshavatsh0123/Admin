"use client"

import * as React from "react"

interface FormSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function FormSection({
  title,
  children,
  className = "",
}: FormSectionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <h3 className="text-[14px] font-medium">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
