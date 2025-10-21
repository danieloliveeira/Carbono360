import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar"; 

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex-1 bg-green-100">
        <AppSidebar />
        <main className="">
          <div>
            <SidebarTrigger />
          </div>
          <div className=" justify-center items-center">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}