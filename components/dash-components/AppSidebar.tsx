import { Command, UserRoundCog, LifeBuoy, Send, LayoutDashboard, Store, ListTodo } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "#/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { NavSecondary } from "./NavSecundary"

// Menu items.
const data = {
    navMain: [
        {
            title: "Home",
            url: "/home",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Usuários",
            url: "/usuarios",
            icon: UserRoundCog,
        },
        {
            title: "Produtos",
            url: "/produtos",
            icon: Store,
        },
        {
            title: "Tarefas",
            url: "/todos",
            icon: ListTodo,
            badge: "10",
        },
    ],
    navSecondary: [
        {
          title: "Soporte",
          url: "#",
          icon: LifeBuoy,
        },
        {
          title: "Feedback",
          url: "#",
          icon: Send,
        },
      ],
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground p-2">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Puro Queijo</span>
                                    <span className="truncate text-xs">Dashboard</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                    <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                    <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarFooter>
        </Sidebar>
    )
}


