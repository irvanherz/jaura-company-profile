import {
  Bot,
  Cloud,
  Compass,
  Globe,
  MessageSquare,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import type { ServiceIcon } from "@/lib/services"

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  consultation: MessageSquare,
  web: Globe,
  mobile: Smartphone,
  automation: Workflow,
  ai: Bot,
  cloud: Cloud,
  strategy: Compass,
}

export function ServiceIconGlyph({
  icon,
  className,
}: {
  icon: ServiceIcon
  className?: string
}) {
  const Icon = serviceIconMap[icon]
  return <Icon className={className} />
}
