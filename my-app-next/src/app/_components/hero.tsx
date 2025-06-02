import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const pixels = Pixelify_Sans({
  subsets: ["latin"],
});

export function Hero() {
  return (
    <div className="relative w-full h-[90vh]">
      <section
        className="bg-[#333446] text-white relative overflow-hidden inset-0 bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: "url('/hero-azul-bg.jpg')" }}
      >
        <article className="container mx-auto py-16 px-4 relative flex flex-col items-center justify-center text-center h-full">
          <div className="space-y-14 max-w-3xl">
            <div className="space-y-4 max-w-3xl">
              <h1
                className={`text-3xl md:text-4xl font-bold leading-10 ${montserrat.className}`}
              >
                Olá, Meu Nome é Ricardo Lazarini
              </h1>

              <p
                className={`lg:text-sm text-xs text-center font-extralight ${pixels.className}`}
              >
                Desenvolvedor Fullstack . Estudante de Sistemas para Internet
              </p>
            </div>

            <div className="flex items-center justify-center">
              <a
                href=""
                className={`bg-[#EAEFEF] text-black rounded-xl py-3 px-3 flex items-center justify-center w-fit hover:bg-[#d5dada] cursor-pointer ${inter.className}`}
              >
                Meus Projetos
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
