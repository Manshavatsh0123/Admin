"use client"

export default function BadgesSection() {

  const badges = [
    "Champion",
    "Speed Demon",
    "Consistent",
    "Explorer",
    "Rising Star",
    "Brilliant",
  ]

  return (
    <div className="bg-white rounded-xl p-5">

      <h3 className="font-semibold mb-4">Badges</h3>

      <div className="flex gap-6 flex-wrap">

        {badges.map((badge, i) => (
          <div key={i} className="text-center">

            <div className="w-12 h-12 bg-gray-100 rounded-full mb-2" />

            <p className="text-xs">{badge}</p>

            <button className="bg-red-500 text-white text-xs px-3 py-1 rounded mt-1">
              Add
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}
