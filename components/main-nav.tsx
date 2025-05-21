import { cn } from "@/lib/utils"
import Link from "next/link"

interface MainNavProps {
  items?: {
    title: string
    href: string
    disabled?: boolean
  }[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="flex items-center space-x-6">
      {items?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            item.disabled && "opacity-60"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
