// src/components/layout/app-sidebar.tsx

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {  ChartNoAxesGantt, Home, LayoutDashboard, PersonStanding} from "lucide-react";
import { Link } from "react-router-dom"; // 1. Remova o 'useNavigate'
import { Button } from "../ui/button";

const items = [
    {
        title: "Home",
        url: '/homepage',
        icon: Home
    },
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Sobre",
        url: "/about",
        icon: ChartNoAxesGantt
    },
    {
        title: "Membros",
        url: "/members",
        icon: PersonStanding 
    }
]

export function AppSidebar() {    
    return (
        <Sidebar className="bg-black ">
            <SidebarContent className="">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="">
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url} >
                                            <item.icon className="mr-2 h-4 w-4" /> 
                                            <span className="text-lg">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <Link to={'/'}>
                                <Button variant="outline" className="mt-90 w-full" >Sair</Button>
                            </Link>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}