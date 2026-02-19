"use client"

import PageInfoBar from "@/components/global/PageInfoBar"
import StudentSidebar from "./components/StudentSidebar"
import StudentOverview from "./components/StudentOverview"
import CourseProgress from "./components/CourseProgress"
import BadgesSection from "./components/BadgesSection"
import RewardsSection from "./components/RewardsSection"
import { ChartLineStudent } from "./components/ChartLineStudent"
import { FireExtinguisher, Medal, Star, Trophy } from "lucide-react"
import BadgeForm from "./components/BadgeForm"


export default function StudentProfilePage() {

    const studentData = [
        { week: "Week1", score: 62 },
        { week: "Week2", score: 72 },
        { week: "Week3", score: 68 },
        { week: "Week4", score: 80 },
        { week: "Week5", score: 88 },
        { week: "Week6", score: 92 },
    ]

    return (
        <>
            <PageInfoBar
                title="Student Profile"
                description="View student performance, progress, and detailed analytics"
                actionButtonLabel="Create Badge"
            />

            <BadgeForm />


            <div className="grid grid-cols-12 gap-5 card-padding">

                <div className="col-span-3">
                    <StudentSidebar
                        students={[
                            { name: "Rahul Singh", courses: 5, progress: 70, active: true },
                            { name: "Arjun Kumar", courses: 3, progress: 50 },
                            { name: "Vikram Gupta", courses: 4, progress: 65 },
                            { name: "Rahul Singh", courses: 5, progress: 70 },
                            { name: "Arjun Kumar", courses: 3, progress: 50 },
                            { name: "Vikram Gupta", courses: 4, progress: 65 },
                        ]}
                    />
                </div>

                <div className="col-span-9 space-y-6">

                    <StudentOverview
                        name="Rahul Singh"
                        lastActive="2026-01-16"
                        avatarLetter="R"
                        stats={[
                            { label: "Courses", value: "5" },
                            { label: "Progress", value: "78%" },
                            { label: "Avg Score", value: "82%" },
                        ]}
                    />

                    <ChartLineStudent data={studentData} />

                    <CourseProgress
                        courses={[
                            { name: "GCSE Mathematics", progress: 60 },
                            { name: "GCSE English", progress: 70 },
                            { name: "Non-verbal reasoning", progress: 80 },
                            { name: "Verbal Reasoning", progress: 80 },
                            { name: "Secondary Science", progress: 80 },
                        ]}
                    />
                </div>
            </div>

            <BadgesSection
                badges={[
                    {
                        name: "Champion",
                        description: "Earned highest score in a course",
                        image: "/images/reward.png",
                    },
                    {
                        name: "Speed Demon",
                        description: "Complete 3 topics tutorial in one day",
                        image: "/images/Thumber.png",
                    },
                    {
                        name: "Focused",
                        description: "Maintain 30-day consistency",
                        image: "/images/Focus.png",
                    },
                    {
                        name: "Bookworm",
                        description: "Complete all subject courses",
                        image: "/images/Books.png",
                    },
                    {
                        name: "Brilliant",
                        description: "Score full marks in any test",
                        image: "/images/Frame.png",
                        locked: true,
                    },
                    {
                        name: "Rising Star",
                        description: "Reach Level 5",
                        image: "/images/Frame.png",
                        locked: true,
                    },
                ]}
            />


            <RewardsSection
                rewards={[
                    {
                        name: "Perfect Quiz",
                        points: "+ 100",
                        icon: <Medal />,
                        bgClass: "bg-yellow-100/50",
                        textColorClass: "text-yellow-600",
                    },
                    {
                        name: "Streak Bonus",
                        points: "+ 50",
                        icon: <FireExtinguisher />,
                        bgClass: "bg-orange-100/50",
                        textColorClass: "text-orange-600",
                    },
                    {
                        name: "Course Completed",
                        points: "+ 200",
                        icon: <Trophy />,
                        bgClass: "bg-green-100/50",
                        textColorClass: "text-green-600",
                    },
                    {
                        name: "Score Full Marks",
                        points: "+ 75",
                        icon: <Star />,
                        bgClass: "bg-blue-100/50",
                        textColorClass: "text-blue-600",
                    },
                ]}
            />


        </>
    )
}
