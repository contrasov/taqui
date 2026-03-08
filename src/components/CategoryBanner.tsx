import { Smartphone, Shirt, Armchair, Monitor, House, Book, Zap, Car } from "lucide-react";

function CategoryBannerHome() {

    const categorysHome = [
        { title: 'Telefone', icon: Smartphone },
        { title: 'Roupas', icon: Shirt },
        { title: 'Mobília', icon: Armchair },
        { title: 'Computadores', icon: Monitor },
        { title: 'Doméstico', icon: House },
        { title: 'Biblioteca', icon: Book },
        { title: 'Eletrônicos', icon: Zap },
        { title: 'Veículos', icon: Car }
    ]

    return (
        <section className="bg-white rounded-2xl p-4 w-full flex flex-row gap-4 items-center">
            <div className="flex flex-col gap-2 bg-backgroundPrincipal p-3 rounded-xl">
                {categorysHome.map((category, index) => (
                    <a className="hover:text-bluePrincipal cursor-pointer flex items-center gap-2 text-blackPrincipal" key={index} >
                        <category.icon size={16} />
                        {category.title}
                    </a>
                ))}
            </div>
            <div className="bg-gray-100 w-full h-67.5 rounded-xl p-4 flex items-center justify-center">
                <p>Placeholder Banner</p>
            </div>
        </section>
    )
}

export default CategoryBannerHome;