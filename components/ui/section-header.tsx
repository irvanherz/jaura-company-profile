import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge variant="outline" className="mb-3 border-primary/25 bg-primary/5 text-xs font-medium text-primary">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
