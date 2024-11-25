'use client'
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, LogOut, Package, PanelBottom, Settings, ShoppingBag, Users } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
export function SideBar(){
  return(
    <div className="w-full flex- flex-col bg-muted/40">
       {/* side bar desktop */}
       <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col  items-center gap-4 px-2 py-5 flex-1">
          <TooltipProvider>
            <Link href="#" className="flex size-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
            <Package className="size-4"/>
            <span className="sr-only"> Dashboard </span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <Home className="size-5"/>
                  <span className="sr-only"> Início </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Início
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <ShoppingBag className="size-5"/>
                  <span className="sr-only"> Pedidos </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Pedidos
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <Package className="size-5"/>
                  <span className="sr-only"> Produtos </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Produtos
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <Users className="size-5"/>
                  <span className="sr-only"> Clientes </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Clientes
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                  <Settings className="size-5"/>
                  <span className="sr-only"> Configuração </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Configuração
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="flex items-center justify-center pb-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-red-500">
                <LogOut className="size-5"/>
                <span className="sr-only"> Sair </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              Sair
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </nav>
      </aside>

      {/* side bar mobile */}
      <div className="flex flex-col sm:hidden sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-2 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant="outline" className="sm:hidden">
                <PanelBottom className="size-5"/>
                <span className="sr-only">Abrir / fechar menu
                </span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm: max-w-x">
              <nav className="flex flex-col items-start gap-6 text-lg font-medium">
                <Link href="#" className="size-10 flex items-center justify-center rounded-full bg-black text-lg text gap-2 md:text-base">
                  <Package className="size-5 text-white"/>
                  <span className="sr-only">Logo do projeto</span>
                </Link>
                <Link href="#" className="flex items-center justify-center px-2.5 gap-4 text-muted-foreground hover:text-foreground">
                  <Home className="size-5 transition-all"/>
                  <span className="">Início</span>
                </Link>
                <Link href="#" className="flex items-center justify-center px-2.5 gap-4 text-muted-foreground hover:text-foreground">
                  <ShoppingBag className="size-5 transition-all"/>
                  <span className="">Pedidos</span>
                </Link>
                <Link href="#" className="flex items-center justify-center px-2.5 gap-4 text-muted-foreground hover:text-foreground">
                  <Package className="size-5 transition-all"/>
                  <span className="">Produtos</span>
                </Link>
                <Link href="#" className="flex items-center justify-center px-2.5 gap-4 text-muted-foreground hover:text-foreground">
                  <Users className="size-5 transition-all"/>
                  <span className="">Clientes</span>
                </Link>
                <Link href="#" className="flex items-center justify-center px-2.5 gap-4 text-muted-foreground hover:text-foreground">
                  <Settings className="size-5 transition-all"/>
                  <span className="">Configurações</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>

     
    </div>
  )
}