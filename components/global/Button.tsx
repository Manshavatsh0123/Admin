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
        "flex items-center justify-center gap-2 px-4 h-10 text-sm font-medium rounded-md transition";

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
                <Plus className="w-4 h-4" />
            )}
            {ctaText}
        </ShadButton>
    );
};

export default AppButton;
