"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import AppButton from "./Button";
import Link from "next/link";

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
      <div className="flex items-center gap-2">

        {showBack && (
          <Link href="/admin">
            <ChevronLeft className="h-7.5 w-7.5 cursor-pointer" />
          </Link>
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
