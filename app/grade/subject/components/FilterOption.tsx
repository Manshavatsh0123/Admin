import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterOption {
  label: string
  value: string
}

interface FilterSectionProps {
  searchPlaceholder?: string
  filters?: {
    label: string
    options: FilterOption[]
    value?: string
    onChange?: (value: string) => void
  }[]
  onSearch?: (value: string) => void
  onReset?: () => void
}

export function FilterSection({
  searchPlaceholder = "Search...",
  filters = [],
  onSearch,
  onReset,
}: FilterSectionProps) {
  return (
    <div className="space-y-4 py-6">
      <div className="flex gap-3">
        <Input
          placeholder={searchPlaceholder}
          className="flex-1"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <Button variant="outline">Search</Button>
      </div>

      {filters.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter, idx) => (
            <Select key={idx} value={filter.value || ""} onValueChange={filter.onChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder={filter.label} />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
          <Button variant="outline" onClick={onReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}
