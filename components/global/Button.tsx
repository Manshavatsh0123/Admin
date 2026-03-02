import { Button as ShadButton } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ComponentProps } from "react"

type AppButtonProps = {
  ctaText: string
  showIcon?: boolean
} & ComponentProps<typeof ShadButton>

const AppButton = ({
  ctaText,
  showIcon = true,
  className = "",
  variant = "default",
  ...props
}: AppButtonProps) => {

  const baseStyle =
    "flex items-center justify-center gap-1 px-[20px] py-[12px] text-[16px] font-medium rounded-[10px] transition"

  return (
    <ShadButton
      variant={variant}
      {...props}
      className={`${baseStyle} ${className}`}
    >
      {showIcon && variant !== "outline" && (
        <Plus size={20} strokeWidth={1.5} className="shrink-0" />
      )}
      {ctaText}
    </ShadButton>
  )
}

export default AppButton
// import { Button as ShadButton } from "@/components/ui/button"
// import { Plus } from "lucide-react"
// import { ComponentProps } from "react"

// type AppButtonProps = {
//   ctaText: string
//   showIcon?: boolean
//   variantStyle?: "primary" | "outline"
// } & ComponentProps<typeof ShadButton>

// const AppButton = ({
//   ctaText,
//   showIcon = true,
//   variantStyle = "primary",
//   className = "",
//   ...props
// }: AppButtonProps) => {

//   const baseStyle =
//     "flex items-center justify-center gap-1 px-[20px] py-[20px] text-[16px] font-medium rounded-[10px] transition"

//   const variants = {
//     primary: "bg-[#CE371F] hover:bg-[#b92f19] text-white",
//     outline:
//       "bg-transparent border border-gray-300 text-black hover:bg-gray-100",
//   }

//   return (
//     <ShadButton
//       {...props}
//       className={`${baseStyle} ${variants[variantStyle]} ${className}`}
//     >
//       {showIcon && variantStyle === "primary" && (
//         <Plus
//           size={20}
//           strokeWidth={1.5}
//           className="shrink-0"
//         />
//       )}
//       {ctaText}
//     </ShadButton>
//   )
// }

// export default AppButton