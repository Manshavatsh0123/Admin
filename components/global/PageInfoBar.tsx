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
  actionButtonLabel?: string;
  onActionClick?: () => void;
}

export default function PageInfoBar({
  title,
  description,
  actions,
  showBack = false,
  actionButtonLabel,
  onActionClick,
}: PageInfoBarProps) {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-start md:items-center">

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
          {title && (
            <h1 className="heading-main">
              {title}
            </h1>
          )}

          {description && (
            <p className="heading-paragraph">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Right side actions */}
      <div>
        {actions
          ? actions
          : actionButtonLabel && (
            <AppButton
              ctaText={actionButtonLabel}
              onClick={onActionClick}
            />
          )}
      </div>

    </div>
  );
}
