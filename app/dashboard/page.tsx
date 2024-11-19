import { AppSidebar } from "#/components/dash-components/AppSidebar";
import { NavUser } from "#/components/dash-components/NavUser";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Separator } from "#/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar";
import { auth } from "../auth/provider";

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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}