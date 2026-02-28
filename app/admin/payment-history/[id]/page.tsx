"use client"

import { useParams } from "next/navigation"
import PageInfoBar from "@/components/global/PageInfoBar"
import AdminLayout from "@/components/global/AdminLayout"

const transactions = [
    {
        id: "TXN001234567",
        customer: "Rahul Singh",
        email: "student@example.com",
        course: "Mathematics",
        grade: "6",
        amount: 499,
        tax: 5,
        method: "Stripe",
        date: "2026-01-16",
    },
]

export default function PaymentDetailsPage() {
    const params = useParams()
    const transaction = transactions.find(t => t.id === params.id)

    if (!transaction) return <div>Transaction not found</div>

    const grandTotal = transaction.amount + transaction.tax

    return (
        <AdminLayout>
            <div className="space-y-8">

                <PageInfoBar
                    title="Payment History"
                    description="Track transactions and payment history"
                />
                <div>
                    <p className="text-[24px] text-black">Transaction ID</p>
                    <p className="text-[30px] font-semibold">{transaction.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-12">

                    <div className="space-y-6">

                        <div>
                            <p className="text-[24px] text-black font-semibold">Billed to</p>
                            <p className="text-[20px] text-black">{transaction.customer} , {transaction.email}</p>
                        </div>

                        <div>
                            <p className="text-[24px] text-black font-semibold">Course</p>
                            <p className="text-[20px]">{transaction.course}</p>
                            <p className="text-[20px] text-black">
                                Grade - {transaction.grade}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div>
                            <p className="text-[24px] text-black font-semibold">Issue Date</p>
                            <p className="text-[20px]">{transaction.date}</p>
                        </div>

                        <div>
                            <p className="text-[24px] text-black font-semibold">Payment Method</p>
                            <p className="text-[20px]">{transaction.method}</p>
                        </div>

                        <div>
                            <p className="text-[24px] text-black font-semibold">Conditions</p>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-[20px]">Price</span>
                                    <span className="text-[20px]">£ {transaction.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[20px]">Tax</span>
                                    <span className="text-[20px]">£ {transaction.tax}</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <span className="text-[20px]">Grand Total</span>
                                    <span className="text-[20px]">£ {grandTotal}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </AdminLayout>
    )
}