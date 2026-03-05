"use client"

import { useState } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import CouponCard from "./components/CouponCard"
import CouponForm from "./components/CouponForm"


type Coupon = {
    id: number
    code: string
    discount: string
    expires: string
    status: "active" | "inactive"
}

const initialCoupons: Coupon[] = [
    {
        id: 1,
        code: "SAVE50",
        discount: "50 % off",
        expires: "2026-03-31",
        status: "active",
    },
    {
        id: 2,
        code: "WELCOME20",
        discount: "20 % off",
        expires: "2026-05-15",
        status: "active",
    },
    {
        id: 3,
        code: "SPRING10",
        discount: "10 % off",
        expires: "2026-04-10",
        status: "inactive",
    },
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
            <CouponForm />

            {/* Coupon Cards */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                {coupons.map((coupon) => (
                    <CouponCard
                        key={coupon.id}
                        code={coupon.code}
                        discount={coupon.discount}
                        expires={coupon.expires}
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