"use client"

import type * as React from "react"
import { BookOpen, Pencil, ImagePlus, Video, Film, HomeIcon as House } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/theme-toggle"
import type { Localy, TypeDictionary } from "@/app/[lang]/dictionaries"
import { LanguageSwitcherIcon } from "@/components/lang-switch-sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: TypeDictionary
  lang: Localy
}

export function AppSidebar({ data, lang, ...props }: AppSidebarProps) {
  // Home as a standalone item


  // Gallery now points directly to the image gallery
  const galleryItem = {
    title: data.sidebar.gallery,
    url: "/dashboard/gallery/image", // Direct link to image gallery
    icon: BookOpen,
    items: [
      {
        title: data.sidebar.gallery_image,
        url: "/dashboard/gallery/image",
      },
      {
        title: data.sidebar.gallery_video,
        url: "/dashboard/gallery/videos",
      },
    ],
  }

  // Other menu items
  const otherNavItems = [
    {
      title: data.sidebar.createImage,
      url: "/dashboard/create/canva",
      icon: Pencil,
      items: [
        {
          title: data.sidebar.createImage_canva,
          url: "/dashboard/create/canva",
        },
      ],
    },
    {
      title: data.sidebar.imageToImage,
      url: "#",
      icon: ImagePlus,
      items: [
        {
          title: data.sidebar.imageToImage_scribble,
          url: "/dashboard/image2image/scribble/0",
        },
        {
          title: data.sidebar.imageToImage_variation,
          url: "/dashboard/image2image/variation/0",
        },
      ],
    },
    {
      title: data.sidebar.generateVideo,
      url: "/dashboard/videogenerate/image2video/0",
      icon: Video,
      items: [
        {
          title: data.sidebar.generateVideo_imageToVideo,
          url: "/dashboard/videogenerate/image2video/0",
        },
      ],
    },
    {
      title: data.sidebar.improveVideo,
      url: "/dashboard/improvevideo/addsound/0",
      icon: Film,
      items: [
        {
          title: data.sidebar.improveVideo_addSound,
          url: "/dashboard/improvevideo/addsound/0",
        },
      ],
    },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarTrigger className="-ml-1" />
      <SidebarHeader className="mb-2 group-data-[collapsible=icon]:mb-16">
        <a href={`/${lang}/dashboard`} className="flex items-center gap-2 hover:text-primary transition-colors truncate">
          <House className="h-5 w-5 shrink-0" />
          <span className="truncate">{data.sidebar.home}</span>
        </a>
      </SidebarHeader>
      <SidebarContent className="gap-0">

        {/* Gallery as a separate item */}
        <div className="group-data-[collapsible=icon]:pt-12 group-data-[collapsible=icon]:mt-8">
          <NavMain items={[galleryItem]} />
        </div>

        {/* Other menu items - with spacing when collapsed */}
        <div className="group-data-[collapsible=icon]:mt-24 space-y-0 group-data-[collapsible=icon]:space-y-8">
          {otherNavItems.map((item, index) => (
            <div key={index} className="group-data-[collapsible=icon]:mb-8">
              <NavMain items={[item]} />
            </div>
          ))}
        </div>
      </SidebarContent>

      <SidebarFooter className="flex items-center justify-between space-x-4">
        <div className="flex items-start space-x-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:space-x-0 group-data-[collapsible=icon]:space-y-2">
          <ModeToggle />
          <LanguageSwitcherIcon currentLang={lang} dictionary={data} />
        </div>
        <NavUser dictionary={data} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
