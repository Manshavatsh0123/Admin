"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

interface FileUploadProps {
  label?: string
  description?: string
  accept?: string
  preview?: boolean
  variant?: "small" | "large"
}

export default function FileUpload({
  label,
  description,
  accept = "image/*",
  preview = true,
  variant = "small",
}: FileUploadProps) {
  const [fileUrl, setFileUrl] = React.useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (preview && file.type.startsWith("image")) {
      setFileUrl(URL.createObjectURL(file))
    }
  }

  const isLarge = variant === "large"

  return (
    <div className="space-y-2 w-full">
      {label && (
        <Label className="text-[14px] font-medium">
          {label}
        </Label>
      )}

      <label
        className={`
          relative w-full border border-[#D9D9D9] rounded-[10px] cursor-pointer flex items-center transition text-black
          ${isLarge ? "h-40 flex-col gap-3 justify-center" : "h-10 px-3 flex-row gap-2 justify-start"}
        `}
      >
        {fileUrl ? (
          <img
            src={fileUrl}
            alt="Preview"
            className="h-full object-contain rounded-md"
          />
        ) : (
          <>
            <Upload className="w-5 h-5 text-gray-600" />
            <div className={`${isLarge ? "text-center" : ""}`}>
              <p className="text-sm font-medium text-gray-700">
                {isLarge ? "Upload Resource Files" : "Drag and drop image here"}
              </p>
              {description && isLarge && (
                <p className="text-xs text-gray-500 mt-1">
                  {description}
                </p>
              )}
            </div>
          </>
        )}

        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
