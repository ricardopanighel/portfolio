import { Hero } from "./_components/hero";
import { Header } from "./_components/header";
import { About } from "./_components/about";

export default function Home(){
  return(
    <main>
      <Header />
      <Hero />
      <About />
    </main>
  )
}