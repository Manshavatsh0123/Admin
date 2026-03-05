"use client"

import * as React from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "../../../../components/global/StatCard"
import { FilterSection } from "./components/FilterOption"
import { DataTable } from "./components/DataTable"
import { StatusBadge } from "./components/StatusBadge"
import type { ColumnDef } from "./components/DataTable"
import CreateSubjectForm from "./components/CreateSubjectForm"
import { Pencil, Trash2 } from "lucide-react"

const mockData = [
    {
        id: 1,
        grade: "Grade 4",
        subjectName: "Math Basics",
        level: "GCSE",
        status: "active",
    },
    {
        id: 2,
        grade: "Grade 5",
        subjectName: "English Literature",
        level: "Secondary",
        status: "active",
    },
    {
        id: 3,
        grade: "Grade 7",
        subjectName: "Science Methods",
        level: "Primary",
        status: "active",
    },
    {
        id: 4,
        grade: "Grade 6",
        subjectName: "Reasoning Concepts",
        level: "Primary",
        status: "active",
    },
    {
        id: 5,
        grade: "Grade 5",
        subjectName: "Reasoning Foundation",
        level: "Secondary",
        status: "draft",
    },
]

const SubjectPage = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    

    return (
        <>
            <PageInfoBar
                title="Subject Management"
                description="Create and manage subjects"
                actionButtonLabel="Create Subject"
                onActionClick={() => setIsModalOpen(true)}
            />

            <CreateSubjectForm />

            <div className="grid grid-cols-3 gap-4 card-padding">
                <StatCard label="Total Courses" value={18} />
                <StatCard label="Active Courses" value="7" />
                <StatCard label="Total Students" value="555" />
            </div>

            <FilterSection
                searchPlaceholder="Search"
                filters={[
                    {
                        label: "All Levels",
                        options: [
                            { label: "All", value: "all" },
                            { label: "GCSE", value: "GCSE" },
                            { label: "Secondary", value: "Secondary" },
                            { label: "Primary", value: "Primary" },
                        ],
                    }
                ]}
            />

            
        </>
    )
}

export default SubjectPage

