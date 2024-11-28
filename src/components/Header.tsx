"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/utils/cn"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import React from "react"
import { Input } from "./ui/input"
import { useAuthStore } from "@/store/useAuthStore"
import { Heart, ShoppingCart } from "lucide-react"

export default function Header() {
  const { isLogged } = useAuthStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-border/40 bg-white">
      <div className="w-full bg-gray-100 min-h-9 px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div className="text-xs font-semibold leading-6 text-gray-900">
          {!isLogged ? (
            <Link href="/auth">Connexion / Inscription</Link>
          ) : (
            <div className="flex gap-4">
              <button onClick={() => useAuthStore.getState().logout()}>Déconnexion</button>
              <Link href="/profile">Profil</Link>
            </div>
          )}
        </div>
      </div>
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700"
            >
              Nikies
            </Link>
          </div>
          <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/assets/images/shoe1.webp"
                      alt="Your Company"
                      className="absolute top-0 left-0 right-0 h-full w-full object-cover"
                      width={200} height={200} />
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/settings" title="Chaussures">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/settings" title="Chaussures 2">
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/catalogue" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Catalogue
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex items-center gap-x-4">
      <Input
        type="search"
        placeholder="Search..."
        className="w-full max-w-sm rounded-full"
      />
      <Link href="#">
        <Heart className="h-6 w-6" />
      </Link>
      <Link href="/checkout">
        <ShoppingCart className="h-6 w-6" />
      </Link>
    </div>
        </div>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"