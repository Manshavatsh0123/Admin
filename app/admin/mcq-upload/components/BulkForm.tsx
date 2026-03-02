"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  bulkUploadSchema,
  BulkUploadFormValues,
} from "@/components/schemas/bulk.schema"
import { Upload } from "lucide-react"

export default function BulkForm() {

  const fileInputRef = React.useRef<HTMLInputElement | null>(null)

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BulkUploadFormValues>({
    resolver: zodResolver(bulkUploadSchema),
  })

  const selectedFile = watch("file")

  const onSubmit = (data: BulkUploadFormValues) => {
    console.log("Upload Data:", data)

    // Later:
    // const formData = new FormData()
    // formData.append("file", data.file)
    // send to API

    reset()
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue("file", file, { shouldValidate: true })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#D9D9D9]/10 rounded-2xl p-6 w-full card-padding"
    >
      <div className="bg-[#CE371F]/10 rounded-xl p-10 flex flex-col items-center justify-center text-center">

        <Upload
          size={32}
          strokeWidth={1.5}
          className="text-black mb-3"
        />

        <p className="text-[18px] font-medium text-black mb-1">
          Drag and drop your file here
        </p>

        <p className="text-[16px] text-gray-600 mb-4">
          or click the button below to select a file
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          type="button"
          onClick={handleClick}
          className="bg-[#D33122] hover:bg-[#B92B1D] text-white text-[16px] font-medium px-5 py-2 rounded-lg transition"
        >
          Choose File
        </button>

        {selectedFile && (
          <p className="text-[12px] text-gray-700 mt-3">
            {(selectedFile as File)?.name}
          </p>
        )}

        {/* {errors.file && (
          <p className="text-[12px] text-red-500 mt-2">
            {errors.file.message}
          </p>
        )} */}

        <p className="text-[12px] text-gray-500 mt-3">
          Supported formats: CSV, XLSX, XLS (Max 10MB)
        </p>

      </div>
    </form>
  )
}