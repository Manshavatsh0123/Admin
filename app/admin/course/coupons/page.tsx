"use client"

import { useQuery } from "@tanstack/react-query"
import PageInfoBar from "@/components/global/PageInfoBar"
import CouponCard from "./components/CouponCard"
import CouponForm from "./components/CouponForm"
import apiClient from "@/lib/network"

type Coupon = {
  id: string
  code: string
  discount: string
  expires: string
  status: "active" | "inactive"
}

export default function Page() {

  const formatDate = (date: string) => {
    if (!date) return "N/A"

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  const { data, isLoading } = useQuery({

    queryKey: ["coupons"],

    queryFn: async () => {

      const token = localStorage.getItem("token")

      const response = await apiClient.get("/coupons", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("COUPONS API:", response.data)

      return response.data
    }

  })

  const coupons: Coupon[] =
    data?.items?.map((coupon: any) => ({
      id: coupon.id,
      code: coupon.code,
      discount: `${coupon.discount}% off`,
      expires: formatDate(coupon.expiryDate),
      status: coupon.isActive ? "active" : "inactive"
    })) || []

  const handleDelete = (id: string) => {
    console.log("Delete coupon:", id)
  }

  if (isLoading) {
    return <p className="p-6">Loading coupons...</p>
  }

  return (
    <>
      <PageInfoBar
        title="Coupon Management"
        description="Create and manage promotional coupons"
        actionButtonLabel="Create Coupon"
      />

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
  )
}