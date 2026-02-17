"use client"

export default function RewardsSection() {

  const rewards = [
    { name: "Perfect Quiz", points: "+100" },
    { name: "Streak Bonus", points: "+50" },
    { name: "Course Complete", points: "+200" },
    { name: "Score Full Marks", points: "+75" },
  ]

  return (
    <div className="bg-white rounded-xl p-5">

      <h3 className="font-semibold mb-4">Rewards</h3>

      <div className="grid grid-cols-4 gap-4">

        {rewards.map((reward, i) => (
          <div key={i} className="border rounded-lg p-3">

            <p className="text-sm">{reward.name}</p>

            <p className="text-green-600 font-semibold">
              {reward.points}
            </p>

            <button className="bg-red-500 text-white text-xs px-3 py-1 rounded mt-2">
              Add
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}
