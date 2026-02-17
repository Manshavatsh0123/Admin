"use client"

import * as React from "react"
import SelectField from "@/components/forms/SelectField"
import { Upload } from "lucide-react"

const BulkForm = () => {

    const fileInputRef = React.useRef<HTMLInputElement | null>(null)
    const [fileName, setFileName] = React.useState("")

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) setFileName(file.name)
    }

    return (
        <div className="bg-[#D9D9D9]/10 rounded-2xl p-6 w-full card-padding">

            <div className="mb-5 w-full">
                <SelectField
                    label="Select Course"
                    placeholder="GCSE Mathematics"
                    options={[
                        { label: "GCSE Mathematics", value: "gcse-math" },
                        { label: "GCSE Science", value: "gcse-science" },
                    ]}
                />
            </div>

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
                    onChange={handleFileChange}/>

                <button
                    type="button"
                    onClick={handleClick}
                    className="bg-[#D33122] hover:bg-[#B92B1D] text-white text-[16px] font-medium px-5 py-2 rounded-lg transition">
                    Choose File
                </button>

                {fileName && (
                    <p className="text-[12px] text-gray-700 mt-3">
                        {fileName}
                    </p>
                )}

                <p className="text-[12px] text-gray-500 mt-3">
                    Supported formats: CSV, XLSX, XLS (Max 10MB)
                </p>

            </div>

            <div className="bg-[#E1F8F2] text-[#1E292B] text-[16px] rounded-[10px] px-4 py-3 mt-5">
                <span className="font-semibold">Format Guide:</span>{" "}
                Your file should contain columns: Question, Option A, Option B, Option C, Option D, Correct Answer
            </div>

        </div>
    )
}

export default BulkForm
