"use client"

import * as React from "react"
import {

  BookOpen,
  Pencil,
  ImagePlus,
  Frame,
  Video,
  Map,
  PieChart,
  Film,
  Music,

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


// This is sample data.
const data = {
  user: {
    name: "ClipDraw",
    email: "@mail",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Gallery",
      url: "#",
      icon: BookOpen,
      //isActive: true,
      items: [
        {
          title: "Image",
          url: "/dashboard//gallery//image",
        },
        {
          title: "Video",
          url: "/dashboard//gallery//videos",
        },
        {
          title: "Sound",
          url: "#",
        },
      ],
    },
    {
      title: "Create Image",
      url: "#",
      icon: Pencil,
      items: [
        {
          title: "Text to Image",
          url: "/dashboard//create//text2image",
        },
        {
          title: "Canva",
          url: "/dashboard//create//canva",
        },
      ],
    },
    {
      title: "Image to Image",
      url: "#",
      icon: ImagePlus,
      items: [
        {
          title: "Upscaler",
          url: "/dashboard//image2image//upscaler/",
        },
        {
          title: "Inpainting",
          url: "/dashboard//image2image//inpainting/",
        },
        {
          title: "Remove Background",
          url: "/dashboard//image2image//playground3/0",
        },
        {
          title: "Image Variations",
          url: "#",
        },
        {
          title: "Playground",
          url: "/dashboard//image2image//playground2/",
        },
      ],
    },
    {
      title: "Generate Video",
      url: "#",
      icon: Video,
      items: [
        {
          title: "Image to Video",
          url: "#",
        },
        {
          title: "Text to Video",
          url: "#",
        },
      ],
    },
    {
      title: "Improve Video",
      url: "#",
      icon: Film,
      items: [
        {
          title: "LipSync",
          url: "#",
        },
        {
          title: "Make It longer",
          url: "#",
        },
        {
          title: "Add AI Sound",
          url: "#",
        },
        {
          title: "Compress / format",
          url: "#",
        },
      ],
    },
    {
      title: "Generate Sound",
      url: "#",
      icon: Music,
      items: [
        {
          title: "Voice talking",
          url: "#",
        },
        {
          title: "AI Music",
          url: "#",
        },
        {
          title: "Add Sound",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
//<NavProjects projects={data.projects} />
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar collapsible="icon" {...props}>
    <SidebarTrigger className="-ml-1" />
    <SidebarHeader>

      </SidebarHeader>
      
      <SidebarContent>
        
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      
      <SidebarFooter>
        
        <ModeToggle />

        <NavUser user={data.user} />
      
      </SidebarFooter>
      
      <SidebarRail />
    
    </Sidebar>
  )
}
