export function FormCard({ title, children }: any) {
  return (
    <div className="bg-[#F6F6F6] rounded-2xl p-6 w-full space-y-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  )
}