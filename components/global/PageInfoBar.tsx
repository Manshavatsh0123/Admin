"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import AppButton from "./Button";

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
    <div className="flex flex-row justify-between items-start md:items-center gap-1">

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
            <p className="text-[20px] text-black">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Right side actions */}
      <div>
        {actions ? (
          actions
        ) : actionButtonLabel ? (
          <AppButton ctaText="Create Subject" />
        ) : null}
      </div>
    </div>
  );
}