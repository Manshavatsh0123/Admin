export function FormSection({ title, children }: any) {
  return (
    <div className="border rounded-xl p-5 space-y-6">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  )
}