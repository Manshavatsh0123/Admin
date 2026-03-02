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

export default function Page() {

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
                title="Badges & Rewards"
                description="View student performance, manage badges and rewards"
                actionButtonLabel="Create Badge"
            />

            <BadgeForm />

            <BadgesSection
                badges={[
                    {
                        name: "Bulls Eye",
                        description: "Score full marks in any test",
                        image: "/images/FocusIcon.png",
                    },
                    {
                        name: "Achiever",
                        description: "Complete assigned work 4 continuous weeks",
                        image: "/images/achievement.png",
                    },
                    {
                        name: "Focused",
                        description: "Maintain 2 weeks consistency",
                        image: "/images/filled.png",
                    },
                    {
                        name: "Bolt",
                        description: "Complete 3 topics in 1 day",
                        image: "/images/fxemoji_bolt.png",
                    },
                    {
                        name: "Outstanding",
                        description: "Earned highest score in a subject",
                        image: "/images/crown.png",
                    },
                    {
                        name: "Outstanding",
                        description: "Earned highest score in a subject",
                        image: "/images/stars-ribbon.png",
                        locked: true,
                    },
                    {
                        name: "Outstanding",
                        description: "Earned highest score in a subject",
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
        </>
    )
}