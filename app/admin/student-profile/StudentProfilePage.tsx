"use client"

import PageInfoBar from "@/components/global/PageInfoBar"
import StudentSidebar from "./components/StudentSidebar"
import StudentOverview from "./components/StudentOverview"
import CourseProgress from "./components/CourseProgress"
import BadgesSection from "./components/BadgesSection"
import RewardsSection from "./components/RewardsSection"


export default function StudentProfilePage() {
    return (
        <>
            <PageInfoBar
                title="Post Management"
                description="Create, edit, and manage blog posts and news & updates for your learners"
                actionButtonLabel="Create Post"
            />

        
            <div className="grid grid-cols-12 gap-5">

                <div className="col-span-3">
                    <StudentSidebar />
                </div>

                <div className="col-span-9 space-y-6">

                    <StudentOverview />

                    <CourseProgress />

                    <BadgesSection />

                    <RewardsSection />

                </div>

            </div>

        </>
    )
}
