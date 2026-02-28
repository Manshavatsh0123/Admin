"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import SelectField from "@/components/forms/SelectField"
import { FormField } from "../grade/subject/components/FormField"
import AppButton from "@/components/global/Button"
import { CouponCard, CouponStatus } from "./components/CouponCard"


type Coupon = {
    id: number
    code: string
    discount: string
    expires: string
    usage: number
    limit: number
    status: CouponStatus
}

const initialCoupons: Coupon[] = [
    {
        id: 1,
        code: "SAVE50",
        discount: "50% off",
        expires: "2026-03-31",
        usage: 45,
        limit: 100,
        status: "active",
    },
    {
        id: 2,
        code: "WELCOME20",
        discount: "20% off",
        expires: "2026-05-15",
        usage: 20,
        limit: 50,
        status: "active",
    },
    {
        id: 3,
        code: "SPRING10",
        discount: "10% off",
        expires: "2026-04-10",
        usage: 5,
        limit: 30,
        status: "inactive",
    }
]

function page() {
    const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons)

    const handleDelete = (id: number) => {
        setCoupons(prev => prev.filter(c => c.id !== id))
    }

    return (
        <>
            <PageInfoBar
                title="Coupon Management"
                description="Create and manage promotional coupons"
                actionButtonLabel="Create Coupon"
            />

            {/* Create Coupon Form */}
            <div className="bg-[#F6F6F6] rounded-3xl p-10 w-full mt-6">

                <h2 className="text-[20px] font-semibold mb-8">
                    Create New Coupon
                </h2>

                <div className="grid grid-cols-3 gap-6 mb-8">

                    <FormField
                        label="Coupon Code"
                        placeholder="e.g., SAVE50"
                    />

                    <SelectField
                        label="Discount Type"
                        placeholder="Percentage%"
                        options={[
                            { label: "Percentage%", value: "percentage" },
                            { label: "Flat Amount", value: "flat" },
                        ]}
                    />

                    <FormField
                        label="Discount Value"
                        placeholder="0"
                        type="number"
                    />

                    <SelectField
                        label="Apply On"
                        placeholder="Quarterly Plan"
                        options={[
                            { label: "Monthly Plan", value: "monthly" },
                            { label: "Quarterly Plan", value: "quarterly" },
                            { label: "Yearly Plan", value: "yearly" },
                        ]}
                    />

                    <FormField
                        label="Expiry Date"
                        placeholder="dd-mm-yyyy"

                    />

                    <FormField
                        label="Usage Limit"
                        placeholder="0"
                        type="number"
                    />

                </div>

                <div className="flex items-center gap-4">
                    <AppButton ctaText="Create Coupon" showIcon={false} />
                    <AppButton ctaText="Cancel" variant="outline" showIcon={false} />
                </div>

            </div>

            {/* Coupon Cards */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                {coupons.map((coupon) => (
                    <CouponCard
                        key={coupon.id}
                        code={coupon.code}
                        discount={coupon.discount}
                        expires={coupon.expires}
                        usage={coupon.usage}
                        limit={coupon.limit}
                        status={coupon.status}
                        onCopy={() => navigator.clipboard.writeText(coupon.code)}
                        onEdit={() => console.log("Edit", coupon.id)}
                        onDelete={() => handleDelete(coupon.id)}
                    />
                ))}
            </div>
        </>
    );
}

export default page; 