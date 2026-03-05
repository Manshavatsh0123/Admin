"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    couponSchema,
    CouponFormValues,
} from "@/components/schemas/coupon.schema"

import { RHFField } from "@/components/forms/RHFField"
import { DatePickerField } from "@/components/forms/DatePickerField"
import AppButton from "@/components/global/Button"

export default function CouponForm() {

    const form = useForm<CouponFormValues>({
        resolver: zodResolver(couponSchema),
        mode: "onSubmit",
        defaultValues: {
            code: "",
            discountValue: "",
            applyOn: "",
            expiryDate: null,
            usageLimit: 1,
        },
    })

    const onSubmit = (data: CouponFormValues) => {
        console.log(data)
    }

    return (
        <div className="bg-[#F6F6F6] rounded-3xl p-10 w-full mt-6">

            <h2 className="text-[20px] font-semibold mb-8">
                Create New Coupon
            </h2>

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >

                <div className="grid grid-cols-3 gap-6">

                    <RHFField
                        name="code"
                        label="Coupon Code"
                        placeholder="e.g., SAVE50"
                        control={form.control}
                    />

                    <RHFField
                        name="discountValue"
                        label="Discount Value"
                        placeholder="15%"
                        control={form.control}
                    />

                    <RHFField
                        name="applyOn"
                        label="Apply On"
                        type="select"
                        placeholder="Mathematics"
                        control={form.control}
                        options={[
                            { label: "Mathematics", value: "math" },
                            { label: "Science", value: "science" },
                            { label: "English", value: "english" },
                        ]}
                    />

                    <DatePickerField
                        label="Expiry Date"
                        value={form.watch("expiryDate")}
                        onChange={(date) =>
                            form.setValue("expiryDate", date, {
                                shouldValidate: true,
                            })
                        }
                    />
                    <RHFField
                        name="usageLimit"
                        label="Usage Limit"
                        type="number"
                        placeholder="0"
                        control={form.control}
                    />

                </div>

                <div className="flex items-center gap-4">

                    <AppButton
                        type="submit"
                        ctaText="Create Coupon"
                        showIcon={false}
                        className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium"
                    />

                    <AppButton
                        type="button"
                        ctaText="Cancel"
                        variant="outline"
                        showIcon={false}
                        className="px-5 py-2 rounded-lg text-[14px]"
                        onClick={() => form.reset()}
                    />

                </div>

            </form>
        </div>
    )
}