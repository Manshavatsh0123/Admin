import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FieldType = "text" | "email" | "number" | "textarea" | "select" | "password"

interface FormFieldProps {
  label: string
  type?: FieldType
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  required?: boolean
  error?: string
  options?: { label: string; value: string }[]
  disabled?: boolean
}

export function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  error,
  options = [],
  disabled,
}: FormFieldProps) {
  return (
    <div className="space-y-2 w-full">
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      ) : type === "select" ? (
        <Select
          value={value ?? ""}
          onValueChange={(val) => onChange?.(val)}
        >
          <SelectTrigger className="w-full" disabled={disabled}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent>
            {options.length > 0 ? (
              options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="no-options" disabled>
                No options available
              </SelectItem>
            )}
          </SelectContent>
        </Select>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}