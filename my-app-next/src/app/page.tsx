import { Hero } from "./_components/hero";
import { Header } from "./_components/header";
import { About } from "./_components/about";
import { CarouselDemo } from "./_components/carousel";

export default function Home(){
  return(
    <main>
      <Header />
      <Hero />
      <About />
      <CarouselDemo />
    </main>
  )
}