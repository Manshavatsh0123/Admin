"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    badgeSchema,
    rewardSchema,
    BadgeFormValues,
    RewardFormValues,
} from "@/components/schemas/badge.schema"
import { RHFField } from "@/components/forms/RHFField"
import AppButton from "@/components/global/Button"

export default function BadgeForm() {

    /*  Badge Form  */
    const badgeForm = useForm<BadgeFormValues>({
        resolver: zodResolver(badgeSchema),
        defaultValues: {
            badgeName: "",
            task: "",
            status: "unlock",
        },
    })

    const onBadgeSubmit = (data: BadgeFormValues) => {
        console.log("Badge Data:", data)
        badgeForm.reset()
    }

    /*  Reward Form  */
    const rewardForm = useForm<RewardFormValues>({
        resolver: zodResolver(rewardSchema) as any,
        defaultValues: {
            rewardName: "",
            task: "",
            points: 0,
        },
    })

    const onRewardSubmit = (data: RewardFormValues) => {
        console.log("Reward Data:", data)
        rewardForm.reset()
    }

    return (
        <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-8 card-padding">

            {/*  Create New Badge  */}
            <div>
                <h2 className="text-lg font-semibold mb-6">
                    Create New Badge
                </h2>

                <form
                    onSubmit={badgeForm.handleSubmit(onBadgeSubmit)}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-3 gap-6">

                        <RHFField
                            name="badgeName"
                            label="Badge Name"
                            placeholder="e.g., Bulls Eye"
                            control={badgeForm.control}
                        />

                        <RHFField
                            name="task"
                            label="Task"
                            placeholder="e.g., Score full marks"
                            control={badgeForm.control}
                        />

                        <RHFField
                            name="status"
                            label="Status"
                            type="select"
                            control={badgeForm.control}
                            options={[
                                { label: "Unlock", value: "unlock" },
                                { label: "Lock", value: "lock" },
                            ]}
                        />

                    </div>

                    <div className="flex items-center gap-3">
                        <AppButton
                            type="submit"
                            ctaText="Create Badge"
                            showIcon={false}
                        />
                        <AppButton
                            type="button"
                            ctaText="Cancel"
                            variantStyle="outline"
                            showIcon={false}
                            onClick={() => badgeForm.reset()}
                        />
                    </div>
                </form>
            </div>

            {/*  Create New Reward  */}
            <div>
                <h2 className="text-lg font-semibold mb-6">
                    Create New Reward
                </h2>

                <form
                    onSubmit={rewardForm.handleSubmit(onRewardSubmit)}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-3 gap-6">

                        <RHFField
                            name="rewardName"
                            label="Reward Name"
                            placeholder="e.g., Perfect Quiz"
                            control={rewardForm.control}
                        />

                        <RHFField
                            name="task"
                            label="Task"
                            placeholder="e.g., Complete all courses"
                            control={rewardForm.control}
                        />

                        <RHFField
                            name="points"
                            label="Points"
                            type="number"
                            placeholder="e.g., 50"
                            control={rewardForm.control}
                        />

                    </div>

                    <div className="flex items-center gap-3">
                        <AppButton
                            type="submit"
                            ctaText="Create Reward"
                            showIcon={false}
                        />
                        <AppButton
                            type="button"
                            ctaText="Cancel"
                            variantStyle="outline"
                            showIcon={false}
                            onClick={() => rewardForm.reset()}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}