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