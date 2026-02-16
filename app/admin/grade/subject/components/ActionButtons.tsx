import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ActionButtonsProps {
  onEdit?: () => void
  onDelete?: () => void
  onView?: () => void
  showDropdown?: boolean
}

export function ActionButtons({
  onEdit,
  onDelete,
  onView,
  showDropdown = true,
}: ActionButtonsProps) {
  if (!showDropdown) {
    return (
      <div className="flex gap-2">
        {onView && (
          <Button variant="ghost" size="sm" onClick={onView}>
            View
          </Button>
        )}
        {onEdit && (
          <Button variant="ghost" size="sm" onClick={onEdit}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            variant="ghost"
            size="sm"
            className="text-red-600 hover:text-red-700"
            onClick={onDelete}
          >
            Delete
          </Button>
        )}
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          ⋯
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {onView && <DropdownMenuItem onClick={onView}>View</DropdownMenuItem>}
        {onEdit && <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>}
        {onDelete && (
          <DropdownMenuItem
            onClick={onDelete}
            className="text-red-600 focus:text-red-700"
          >
            Delete
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
