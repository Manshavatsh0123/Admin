"use client"

import { useState, useMemo } from "react"
import PageInfoBar from "@/components/global/PageInfoBar"
import { StatCard } from "@/components/global/StatCard"
import { FilterSection } from "../grade/subject/components/FilterOption"
import { DataTable, ColumnDef } from "../grade/subject/components/DataTable"
import { Pencil } from "lucide-react"
import { ChartLineDots } from "../components/ChartLineDots"
import PaymentsForm from "./components/PaymentsForm"

type Transaction = {
    id: string
    customer: string
    amount: number
    type: string
    plan: string
    date: string
    status: "success" | "failed"
}

const transactions: Transaction[] = [
    {
        id: "TXN001234567",
        customer: "Rahul Singh",
        amount: 4999,
        type: "Subscription",
        plan: "Quarterly",
        date: "2026-01-16",
        status: "success",
    },
    {
        id: "TXN001234568",
        customer: "Priya Sharma",
        amount: 0,
        type: "Subscription",
        plan: "Free",
        date: "2026-01-15",
        status: "success",
    },
    {
        id: "TXN001234569",
        customer: "Arjun Kumar",
        amount: 3999,
        type: "Subscription",
        plan: "Annual",
        date: "2026-01-14",
        status: "success",
    },
]

export default function PaymentsPage() {
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    /*  Filtering  */

    const filteredData = useMemo(() => {
        return transactions.filter((item) => {
            const matchSearch =
                item.customer.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase())

            const matchStatus =
                statusFilter === "all" || item.status === statusFilter

            return matchSearch && matchStatus
        })
    }, [search, statusFilter])

    /*  Dynamic Stats  */

    const totalTransactions = transactions.length

    const totalRevenue = transactions.reduce(
        (sum, t) => sum + t.amount,
        0
    )

    const successTransactions = transactions.filter(
        (t) => t.status === "success"
    ).length

    const successRate =
        totalTransactions > 0
            ? ((successTransactions / totalTransactions) * 100).toFixed(0)
            : 0

    const averageTransaction =
        totalTransactions > 0
            ? Math.round(totalRevenue / totalTransactions)
            : 0

    /*  Chart Data  */

    const chartData = [
        { month: "Jan", revenue: 1000 },
        { month: "Feb", revenue: 1200 },
        { month: "Mar", revenue: 1800 },
        { month: "Apr", revenue: 2100 },
        { month: "May", revenue: 2600 },
        { month: "Jun", revenue: 3000 },
    ]

    /*  Table Columns  */

    const columns: ColumnDef[] = [
        {
            id: "id",
            header: "Transaction ID",
            accessorKey: "id",
        },
        {
            id: "customer",
            header: "Customer",
            accessorKey: "customer",
        },
        {
            id: "amount",
            header: "Amount",
            accessorKey: "amount",
            cell: (value) => `£ ${value.toLocaleString()}`,
        },
        {
            id: "type",
            header: "Type",
            accessorKey: "type",
            cell: (value) => (
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                    {value}
                </span>
            ),
        },
        {
            id: "plan",
            header: "Plan",
            accessorKey: "plan",
        },
        {
            id: "date",
            header: "Date",
            accessorKey: "date",
        },
        {
            id: "actions",
            header: "Actions",
            accessorKey: "id",
            cell: () => (
                <Pencil className="w-4 h-4 cursor-pointer hover:text-gray-600" />
            ),
        },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: (value) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${value === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                >
                    {value === "success" ? "Success" : "Failed"}
                </span>
            ),
        },
    ]

    return (
        <>
            <PageInfoBar
                title="Payments"
                description="Track transactions and manage subscriptions"
                actionButtonLabel="Create Plan"
            />

            <PaymentsForm />

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 mt-8">
                <StatCard label="Total Revenue" value={`£${totalRevenue}`} />
                <StatCard label="Total Transactions" value={totalTransactions} />
                <StatCard label="Success Rate" value={`${successRate}%`} />
                <StatCard label="Average Transaction" value={`£${averageTransaction}`} />
            </div>

            {/* Chart */}
            <ChartLineDots data={chartData} />

            {/* Filter Section */}
            <FilterSection
                searchPlaceholder="Search by name or transaction ID..."
                filters={[
                    {
                        label: "All Status",
                        options: [
                            { label: "All Status", value: "all" },
                            { label: "Success", value: "success" },
                            { label: "Failed", value: "failed" },
                        ],
                        value: statusFilter,
                        onChange: setStatusFilter,
                    },
                ]}
                onSearch={setSearch}
            />

            {/* Table */}
            <DataTable columns={columns} data={filteredData} />
        </>
    )
}