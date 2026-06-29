import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type BrandShowcaseProps = {
  className?: string
  showText?: boolean
  size?: "md" | "lg"
}

export function BrandShowcase({
  className,
  showText = true,
  size = "lg",
}: BrandShowcaseProps) {
  const isLarge = size === "lg"

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-3xl bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] ring-1 ring-white/80",
          isLarge ? "size-44 sm:size-52 md:size-56" : "size-36 sm:size-40"
        )}
      >
        <div
          aria-hidden
          className="absolute inset-3 rounded-2xl bg-gradient-to-br from-[#9d0c25]/8 via-transparent to-[#9d0c25]/4"
        />
        <img
          src="/logo.svg"
          alt={`${site.name} logo`}
          width={isLarge ? 160 : 120}
          height={isLarge ? 160 : 120}
          className={cn(
            "relative",
            isLarge ? "size-32 sm:size-36 md:size-40" : "size-24 sm:size-28"
          )}
        />
      </div>

      {showText ? (
        <div className="mt-6 space-y-1">
          <p
            className={cn(
              "font-semibold tracking-tight text-foreground",
              isLarge ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {site.name}
          </p>
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>
      ) : null}
    </div>
  )
}
