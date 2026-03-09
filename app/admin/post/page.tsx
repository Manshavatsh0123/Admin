import PostManagementPage from "./components/PostManagement"

type Post = {
  id: number
  title: string
  labels?: string
  category: string
  date: string
  status: "published" | "scheduled" | "draft"
}

const blogData: Post[] = [
  {
    id: 1,
    title: "10 Proven Strategies to Score Higher in GCSE Mathematics",
    labels: "GCSE, Mathematics",
    category: "Exam Preparation",
    date: "2026-02-05",
    status: "published",
  },
]

export default function Page() {
  return <PostManagementPage type="blog" data={blogData} />
}

// "use client"

// import * as React from "react"
// import PageInfoBar from "@/components/global/PageInfoBar"
// import { Eye, Pencil, Trash2 } from "lucide-react"
// import { StatCard } from "@/components/global/StatCard"
// import { StatusBadge } from "../../../components/DataForm/StatusBadge"
// import { FilterSection } from "../../../components/DataForm/FilterOption"
// import { ColumnDef, DataTable } from "../../../components/DataForm/DataTable"
// import PostForm from "./components/PostForm"

// type BlogPost = {
//     id: number
//     title: string
//     labels: string
//     category: string
//     date: string
//     status: "published" | "scheduled" | "draft"
// }

// const mockData: BlogPost[] = [
//     {
//         id: 1,
//         title: "10 Proven Strategies to Score Higher in GCSE Mathematics",
//         labels: "GCSE, Mathematics",
//         category: "Exam Preparation",
//         date: "2026-02-05",
//         status: "published",
//     },
//     {
//         id: 2,
//         title: "How to Structure a Perfect English Literature Essay",
//         labels: "GCSE, English",
//         category: "Writing Skills",
//         date: "2026-02-01",
//         status: "published",
//     },
//     {
//         id: 3,
//         title: "A Parent’s Complete Guide to Supporting Online Learning",
//         labels: "Parents, Learning",
//         category: "Parent Resources",
//         date: "2026-01-28",
//         status: "published",
//     },
//     {
//         id: 4,
//         title: "Mastering Verbal Reasoning for 11 Plus Exams",
//         labels: "11 Plus, Reasoning",
//         category: "Study Tips",
//         date: "2026-02-10",
//         status: "scheduled",
//     },
//     {
//         id: 5,
//         title: "Platform Update: New Dashboard Features Explained",
//         labels: "Platform, Updates",
//         category: "Announcements",
//         date: "2026-02-03",
//         status: "draft",
//     },
//     {
//         id: 6,
//         title: "Top 5 Science Revision Techniques That Actually Work",
//         labels: "GCSE, Science",
//         category: "Revision Tips",
//         date: "2026-01-30",
//         status: "published",
//     },
//     {
//         id: 7,
//         title: "How to Stay Consistent During Exam Season",
//         labels: "Motivation, Students",
//         category: "Student Success",
//         date: "2026-02-07",
//         status: "scheduled",
//     },
// ]

// function page() {
//     const [isModalOpen, setIsModalOpen] = React.useState(false)

//     const columns: ColumnDef<BlogPost>[] = [
//         {
//             id: "title",
//             header: "Title",
//             accessorKey: "title",
//         },
//         {
//             id: "labels",
//             header: "Labels",
//             accessorKey: "labels",
//         },
//         {
//             id: "category",
//             header: "Category",
//             accessorKey: "category",
//         },
//         {
//             id: "date",
//             header: "Date",
//             accessorKey: "date",
//         },
//         {
//             id: "status",
//             header: "Status",
//             accessorKey: "status",
//             cell: (value, row) => {
//                 let statusType: "active" | "pending" | "draft" = "draft"
//                 let label = "Draft"

//                 if (value === "published") {
//                     statusType = "active"
//                     label = "Published"
//                 }

//                 if (value === "scheduled") {
//                     statusType = "pending"
//                     label = "Scheduled"
//                 }

//                 return (
//                     <StatusBadge
//                         status={statusType}
//                         label={label}
//                     />
//                 )
//             },
//         },
//         {
//             id: "actions",
//             header: "Actions",
//             accessorKey: "id",
//             cell: (_, row) => (
//                 <div className="flex items-center gap-4">
//                     <Pencil
//                         size={16}
//                         strokeWidth={1.5}
//                         className="cursor-pointer hover:text-gray-600"
//                         onClick={(e) => {
//                             e.stopPropagation()
//                             console.log("Edit", row)
//                         }}
//                     />
//                     <Trash2
//                         size={16}
//                         strokeWidth={1.5}
//                         className="cursor-pointer hover:text-red-600"
//                         onClick={(e) => {
//                             e.stopPropagation()
//                             console.log("Delete", row)
//                         }}
//                     />
//                 </div>
//             ),
//         },
//     ]

//     return (
//         <>
//             <PageInfoBar
//                 title="Post Management"
//                 description="Create, edit, and manage blog posts and news & updates for your learners"
//                 actionButtonLabel="Create Post"
//                 onActionClick={() => setIsModalOpen(true)}
//             />

//             <PostForm />

//             <div className="grid grid-cols-4 gap-7.5 card-padding">
//                 <StatCard label="Total Posts" value={5} />
//                 <StatCard label="Published" value="4" />
//                 <StatCard label="Total Views" value="500" />
//                 <StatCard label="Average Views/Post" value="540" />
//             </div>

//             <FilterSection
//                 searchPlaceholder="Search"
//                 filters={[
//                     {
//                         label: "All Levels",
//                         options: [
//                             { label: "All", value: "all" },
//                             { label: "GCSE", value: "GCSE" },
//                             { label: "Secondary", value: "Secondary" },
//                             { label: "Primary", value: "Primary" },
//                         ],
//                     }
//                 ]}
//             />

//             <DataTable<BlogPost>
//                 columns={columns} data={mockData} />
//         </>
//     );
// }

// export default page;