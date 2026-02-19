"use client"

import SelectField from "@/components/forms/SelectField"
import AppButton from "@/components/global/Button"
import { FormField } from "../../grade/subject/components/FormField"

export default function NotificationForm() {

    return (
        <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6.5">

            <h2 className="text-[18px] font-semibold mb-6">
                Create Notification
            </h2>

            <div className="mb-6">
                <FormField
                    label="Title"
                    placeholder="Notification Title"
                />
            </div>

            <div className="mb-6">
                <FormField
                    label="Message"
                    placeholder="Write your message here..."
                    type="textarea"
                />
            </div>

            {/* Row: Send To + Channel */}
            <div className="grid grid-cols-2 gap-5 mb-6">

                <SelectField
                    label="Send To"
                    placeholder="All Users"
                    options={[
                        { label: "All Users", value: "all" },
                        { label: "Students", value: "students" },
                        { label: "Tutors", value: "tutors" },
                        { label: "Parents", value: "parents" },
                    ]}
                />

                <SelectField
                    label="Channel"
                    placeholder="Both Email and Dashboard"
                    options={[
                        { label: "Email Only", value: "email" },
                        { label: "Dashboard Only", value: "dashboard" },
                        { label: "Both Email and Dashboard", value: "both" },
                    ]}
                />

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">

                <AppButton
                    ctaText="Send Notification"
                    showIcon={false}
                />

                <AppButton
                    ctaText="Cancel"
                    variant="outline"
                    showIcon={false}
                />

            </div>

        </div>
    )
}
