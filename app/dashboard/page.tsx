import { AppSidebar } from "#/components/dash-components/AppSidebar";
import { NavUser } from "#/components/dash-components/NavUser";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Separator } from "#/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar";
import { auth } from "../auth/provider";
import { TodoForm } from "./todos/create-todo";

export default async function DashboardPage() {
  const session = await auth()
  const name = session?.user?.name
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="w-full flex justify-between bg-slate-100 py-1 pr-5">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <form action="" className="flex gap-2 items-center">
              <Input type="text" placeholder="Pesquisar..." disabled />
              <Button type="submit" size="sm">Buscar</Button>
            </form>
          </div>
          <div className="flex">
            <NavUser />
          </div>
        </div>
        <TodoForm />
      </SidebarInset>
    </SidebarProvider>
  )
}