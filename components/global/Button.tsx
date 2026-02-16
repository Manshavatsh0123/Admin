import { Button as ShadButton } from "@/components/ui/button";
import { Plus } from "lucide-react";

type AppButtonProps = {
    ctaText: string;
    showIcon?: boolean;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "outline";
};

const AppButton = ({
    ctaText,
    showIcon = true,
    className = "",
    onClick,
    variant = "primary",
}: AppButtonProps) => {
    const baseStyle =
        "flex items-center justify-center gap-1 px-[20px] py-[20px]  text-[16px] font-medium rounded-[10px] transition";

    const variants = {
        primary:
            "bg-[#CE371F] hover:bg-[#b92f19] text-white",
        outline:
            "bg-transparent border border-gray-300 text-black hover:bg-gray-100",
    };

    return (
        <ShadButton
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {showIcon && variant === "primary" && (
                <Plus size={20}
                    strokeWidth={1.5}
                    className="shrink-0" />
            )}
            {ctaText}
        </ShadButton>
    );
};

export default AppButton;
