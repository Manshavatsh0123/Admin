import { z } from "zod"

export const bulkUploadSchema = z.object({
  file: z
    .any()
    .refine((file) => file instanceof File, "File is required")
    .refine(
      (file) =>
        ["text/csv", 
         "application/vnd.ms-excel",
         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
          .includes(file?.type),
      "Only CSV, XLS, XLSX files are allowed"
    )
    .refine(
      (file) => file?.size <= 10 * 1024 * 1024,
      "Max file size is 10MB"
    ),
})

export type BulkUploadFormValues = z.infer<typeof bulkUploadSchema>