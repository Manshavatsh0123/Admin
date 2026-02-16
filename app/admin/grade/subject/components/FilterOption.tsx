import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

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
}: FilterSectionProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[20px] card-padding">

      {/* Search */}
      <div className="w-full md:w-4/2">
        <div className="relative">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <Input
            placeholder={searchPlaceholder}
            className="w-full pl-10"
            onChange={(e) => onSearch?.(e.target.value)}
          />

        </div>
      </div>

      {/* Filters */}
      {filters.length > 0 && (
        <div className="flex gap-3 flex-wrap md:justify-end">
          {filters.map((filter, idx) => (
            <Select
              key={idx}
              value={filter.value || ""}
              onValueChange={filter.onChange}
            >
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
        </div>
      )}
    </div>

  )
}
