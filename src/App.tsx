import Header from "@/components/Header"
import CategoryBannerHome from "@/components/CategoryBanner"
import Items from "@/components/Items"

function App() {

  return (
    <main className="flex flex-col gap-8 items-center">
      <Header />
      <section className="flex flex-col gap-4 items-center max-w-275 mb-8" >
        <CategoryBannerHome />
        <Items />
      </section>
    </main>
  )
}

export default App
