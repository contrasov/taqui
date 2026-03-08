import { Input } from "@/components/ui/input";
import { Package2, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
    return (
        <main className="flex flex-row items-center justify-between bg-bluePrincipal py-6 px-62.5 w-full">
            <h1 className="text-white text-2xl font-black">TaQui</h1>
            <div className="w-1/2 relative">
                <Input placeholder="Pesquisar..." className="bg-white rounded-4xl border-2 h-10 border-blackPrincipal pr-20" />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-4 cursor-pointer" > <Search /> Buscar</Button>
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-row items-center gap-2 text-white hover:text-blackPrincipal cursor-pointer">
                    <UserRound className="h-5 w-5" />
                    <p className="text-sm">Entrar</p>
                </div>
                <div className="flex flex-row items-center gap-2 text-white hover:text-blackPrincipal cursor-pointer">
                    <Package2 className="h-5 w-5" />
                    <p className="text-sm">Pedidos</p>
                </div>
            </div>
        </main>
    )
}

export default Header;