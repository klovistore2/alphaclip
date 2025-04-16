"use client"

import * as React from "react"
import {
  BookOpen,
  Pencil,
  ImagePlus,
  //Frame,
  Video,
  //Map,
  //PieChart,
  Film,
  //Music,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
//import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
//import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/theme-toggle"
import { Localy, TypeDictionary } from '@/app/[lang]/dictionaries'; 

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: TypeDictionary;
  lang: Localy;
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  // Utiliser les traductions de la sidebar


  const navMainItems = [
    {
      title: data.sidebar.gallery,
      url: "#",
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
    },
    {
      title: data.sidebar.createImage,
      url: "#",
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
      url: "#",
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
      url: "#",
      icon: Film,
      items: [
        {
          title: data.sidebar.improveVideo_addSound,
          url: "/dashboard/improvevideo/addsound/0",
        },
        {
          title: data.sidebar.improveVideo_makeLonger,
          url: "/dashboard/improvevideo/extend/0",
        },
      ],
    },
  ];
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarTrigger className="-ml-1" />
      <SidebarHeader>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={navMainItems} />
      </SidebarContent>
      
      <SidebarFooter>
        <ModeToggle />
        <NavUser dictionary={data} />
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
