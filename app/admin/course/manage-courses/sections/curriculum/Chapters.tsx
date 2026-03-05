"use client"

import React, { useState } from "react"
import { Pencil, Trash2, Plus } from "lucide-react"

type Chapter = {
  id: number
  name: string
}

export default function Chapters() {

  const [showForm, setShowForm] = useState(false)

  const [chapterName, setChapterName] = useState("")
  const [duration, setDuration] = useState("")

  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: 1,
      name: "Linear Equations & Systems",
    },
  ])

  const createChapter = () => {

    if (!chapterName) return

    const newChapter: Chapter = {
      id: Date.now(),
      name: chapterName,
    }

    setChapters([...chapters, newChapter])

    setChapterName("")
    setDuration("")
    setShowForm(false)
  }

  return (
    <div className="bg-[#F6F6F6] rounded-3xl p-8 w-full mt-6">

      {/* New Chapter Button */}
      <button
        onClick={() => setShowForm(true)}
        className="flex items-center gap-2 bg-[#D33122] hover:bg-[#B92B1D] text-white px-5 py-2 rounded-lg text-[14px] font-medium transition"
      >
        <Plus size={16} />
        New Chapter
      </button>

      {/* Chapter Form */}
      {showForm && (
        <div className="mt-6">

          <div className="grid grid-cols-2 gap-6">

            {/* Chapter Name */}
            <div>
              <label className="text-[14px] font-medium">
                Chapter Name
              </label>

              <input
                value={chapterName}
                onChange={(e) => setChapterName(e.target.value)}
                className="mt-2 w-full border rounded-lg px-4 py-2 text-[14px]"
                placeholder="Algebra"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="text-[14px] font-medium">
                Duration
              </label>

              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-2 w-full border rounded-lg px-4 py-2 text-[14px]"
                placeholder="1-2 hours"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-5">

            <button
              onClick={createChapter}
              className="bg-[#D33122] hover:bg-[#B92B1D] text-white px-4 py-2 rounded-lg text-[14px] font-medium"
            >
              Create
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="border px-4 py-2 rounded-lg text-[14px]"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      {/* Chapters List */}
      <div className="mt-8 space-y-3">

        {chapters.map((chapter) => (

          <div
            key={chapter.id}
            className="flex items-center justify-between border rounded-xl px-4 py-3 bg-white"
          >

            <p className="text-[14px] font-medium">
              {chapter.name}
            </p>

            <div className="flex items-center gap-4">

              <Pencil
                size={16}
                className="cursor-pointer"
              />

              <Trash2
                size={16}
                className="text-[#D33122] cursor-pointer"
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}