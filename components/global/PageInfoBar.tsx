"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface PageInfoBarProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  showBack?: boolean;
  actionButtonLabel?: string
  onActionClick?: () => void
}

export default function PageInfoBar({
  title,
  description,
  actions,
  showBack = false,
  actionButtonLabel = "Add New",
  onActionClick,
}: PageInfoBarProps) {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-start md:items-center gap-5">

      {/* Left side */}
      <div className="flex items-center gap-4">

        {showBack && (
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="p-0 w-8 h-8 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}

        <div>
          <h1 className="text-[36px] font-bold">
            {title}
          </h1>
          {description && (
            <p className="text-[20px] text-gray-500">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Right side actions */}
      {actions &&
        <Button
          onClick={onActionClick}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {actionButtonLabel}
        </Button>}
    </div>
  );
}