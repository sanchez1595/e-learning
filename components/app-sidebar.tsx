"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  BookOpenIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "admin",
    email: "admin@medilearn.com",
    avatar: "/avatars/01.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Cursos",
      url: "/admin/cursos",
      icon: BookOpenIcon,
    },
    {
      title: "Usuarios",
      url: "#",
      icon: UsersIcon,
    },
    {
      title: "Estadísticas",
      url: "#",
      icon: BarChartIcon,
    },
    {
      title: "Recursos",
      url: "#",
      icon: FolderIcon,
    },
  ],
  navClouds: [
    {
      title: "Médicos",
      icon: FileTextIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Cursos Médicos",
          url: "#",
        },
        {
          title: "Certificaciones",
          url: "#",
        },
      ],
    },
    {
      title: "Enfermeras",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Cursos Enfermería",
          url: "#",
        },
        {
          title: "Prácticas Clínicas",
          url: "#",
        },
      ],
    },
    {
      title: "Pacientes",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Materiales Educativos",
          url: "#",
        },
        {
          title: "Autocuidado",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Ayuda",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Sitio Público",
      url: "/",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Informes",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Plantillas",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Archivos",
      url: "#",
      icon: FileIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/admin">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">MediLearn Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
