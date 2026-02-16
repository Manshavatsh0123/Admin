"use client"

import * as React from "react"

import SelectField from "@/components/forms/SelectField"
import FileUpload from "@/components/forms/Select"
import AppButton from "@/components/global/Button"
import { FormField } from "../../grade/subject/components/FormField"
import { DatePickerField } from "@/components/forms/DatePickerField"

export default function PostForm() {

    const [sections, setSections] = React.useState([
        { title: "", description: "" },
    ])

    const handleAddSection = () => {
        setSections([
            ...sections,
            { title: "", description: "" }
        ])
    }

    const handleSectionChange = (
        index: number,
        field: "title" | "description",
        value: string
    ) => {
        const updated = [...sections]
        updated[index][field] = value
        setSections(updated)
    }

    return (
        <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6.5">

            {/* Title */}
            <h2 className="text-[20px] font-semibold mb-8">
                Create New Blog Post
            </h2>

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6">

                <SelectField
                    label="Post Type"
                    placeholder="Select post type"
                    options={[
                        { label: "Blog Post", value: "blog" },
                        { label: "News", value: "news" },
                    ]}
                />

                <FormField
                    label="Post title"
                    placeholder="Enter post title"
                />

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mt-6">

                {/* Labels */}
                <FormField
                    label="Labels"
                    placeholder="11 Plus"
                />

                {/* Category */}
                <SelectField
                    label="Category"
                    placeholder="Select category"
                    options={[
                        { label: "Educational", value: "educational" },
                        { label: "Study Tips", value: "study" },
                        { label: "News", value: "news" },
                    ]}
                />

            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mt-6">


                <DatePickerField
                    label="Publish Date"
                    placeholder="dd-mm-yyyy"
                />

                <SelectField
                    label="Status"
                    placeholder="Select status"
                    options={[
                        { label: "Draft", value: "draft" },
                        { label: "Published", value: "published" },
                        { label: "Scheduled", value: "scheduled" },
                    ]}
                />

            </div>

            {/* Post Image Upload */}
            <div className="mt-8">
                <FileUpload
                    label="Post Image"
                    variant="large"
                    description="Drag and drop image here or click to browse (PNG, JPG, JPEG)"
                    accept="image/png,image/jpeg,image/jpg"
                    preview={true}
                />
            </div>

            {/* Post Content */}
            <div className="mt-8">

                <h3 className="text-[16px] font-semibold mb-4">
                    Post Content
                </h3>

                <div className="space-y-4">

                    {sections.map((section, index) => (

                        <div key={index} className="space-y-4">

                            <FormField
                                label=""
                                placeholder="Enter section title"
                                value={section.title}
                                onChange={(value) =>
                                    handleSectionChange(index, "title", value)
                                }
                            />

                            <FormField
                                label=""
                                placeholder="Enter description"
                                type="textarea"
                                value={section.description}
                                onChange={(value) =>
                                    handleSectionChange(index, "description", value)
                                }
                            />

                        </div>

                    ))}

                </div>

                {/* Add more sections */}
                <button
                    type="button"
                    onClick={handleAddSection}
                    className=" w-full mt-4 border border-gray-300 rounded-[10px] py-[10px] text-[14px] font-medium hover:bg-gray-50 transition">
                    Add more
                </button>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">

                <AppButton
                    ctaText="Create Blog"
                    showIcon={false}
                />

                <AppButton
                    ctaText="Cancel"
                    variant="outline"
                    showIcon={false}
                />

            </div>

        </div>
    )
}
