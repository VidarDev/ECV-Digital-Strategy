"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/utils/cn"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Settings", href: "/settings" },
  { name: "Profile", href: "/settings/profile" },
  { name: "FindRelayOrRelay", href: "/findrelayorlocker" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-border/40 bg-white">
      <div className="w-full bg-gray-100 min-h-9 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex gap-x-2">
          <Image
            src="/images/default.svg"
            alt="Your Company"
            className="h-8 w-auto"
            width={24} height={24} />
        <Image
            src="/images/default.svg"
            alt="Your Company"
            className="h-8 w-auto"
            width={24} height={24} />
        </div>
        <div className="text-xs font-semibold leading-6 text-gray-900">
          <Link href="/login">Sidentifier</Link>
        </div>
      </div>
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700"
            >
              Digital Strategy
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
