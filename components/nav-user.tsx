"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  LogIn,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { TypeDictionary } from '@/app/[lang]/dictionaries'

interface NavUserProps {
  user?: {
    name: string
    email: string
    avatar: string
  }
  dictionary?: TypeDictionary
}

export function NavUser({
  dictionary,
}: NavUserProps) {
  const { isMobile } = useSidebar()
  const { data: session, status } = useSession()
  
  // Si l'utilisateur n'est pas connecté, afficher le bouton de connexion
  if (status === "unauthenticated") {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <Button variant="outline" onClick={() => signIn()} className="w-full group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8">
            <LogIn className="mr-2 h-4 w-4 group-data-[collapsible=icon]:mr-0" />
            <span className="group-data-[collapsible=icon]:hidden">{dictionary?.userNav?.signIn || "Sign In"}</span>
          </Button>
        </SidebarMenuItem>
      </SidebarMenu>
    )
  }

  // Si la session est en cours de chargement
  if (status === "loading") {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">...</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{dictionary?.userNav?.loading || "Loading..."}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    )
  }

  // Utilisateur connecté - utiliser les données de session
  const userData = {
    name: session?.user?.name || "User",
    email: session?.user?.email || "",
    avatar: session?.user?.image || "",
  }

  // Valeurs par défaut si dictionary n'est pas fourni ou si les clés sont manquantes
  const translations = {
    profile: dictionary?.userNav?.profile || "Profile",
    settings: dictionary?.userNav?.settings || "Settings",
    signIn: dictionary?.userNav?.signIn || "Sign In",
    loading: dictionary?.userNav?.loading || "Loading...",
    account: dictionary?.userNav?.account || "Account",
    billing: dictionary?.userNav?.billing || "Billing",
    upgrade: dictionary?.userNav?.upgrade || "Upgrade to Pro",
    logOut: dictionary?.userNav?.logOut || "Log out"
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="rounded-lg">
                  {userData.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userData.name}</span>
                <span className="truncate text-xs">{userData.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="rounded-lg">
                    {userData.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userData.name}</span>
                  <span className="truncate text-xs">{userData.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                {translations.upgrade}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User />
                {translations.profile}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgeCheck />
                {translations.account}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                {translations.billing}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                {translations.settings}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              {translations.logOut}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
