import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import ItemCard from "./ItemCard";



function Items() {

    const recommendations = [
        { title: 'Talvez você goste' },
        { title: 'Pescaria' },
        { title: 'Violão' },
        { title: 'Fotografia' },
        { title: 'Moda feminina' },
        { title: 'Motocicletas' },
        { title: 'Instrumentos de Guitarra' },
        { title: 'Itens para Casa' },
    ];

    return (
        <section className="container">
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="ml-1.5">
                    {recommendations.map((recommend, index) => (
                        <CarouselItem key={index} className="basis-auto">
                            <a className="category">{recommend.title}</a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="grid grid-cols-4 gap-4 p-4">
                {Array.from({ length: 24 }).map((_, index) => (
                    <ItemCard key={index} />
                ))}
            </div>
        </section>
    )
}

export default Items;