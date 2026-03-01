"use client"

import { useRouter } from "next/navigation"
import TutorForm from "../../components/Forms/TutorForm"

export default function CreateTutorPage() {

  const router = useRouter()

  return (
    <TutorForm
      onCancel={() => router.push("/admin/users/tutor")}
    />
  )
}