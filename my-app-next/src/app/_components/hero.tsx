import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import myImage from "../../../public/foto-ricardo.png";

const cinzel = Cinzel({
  subsets: ["latin"],
});

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
    <div className="relative w-full">
      <section
        className="bg-[#fdfcef] flex flex-col items-center justify-start pt-[15vh] text-center px-4 h-[90vh]"
        // style={{ backgroundImage: "url('/hero-azul-bg.jpg')" }}
      >
        <Image
          src={myImage}
          alt="Minha foto"
          width={200}
          height={200}
          className="rounded-full object-cover my-6"
        />
        <article className="flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <p
              className={`lg:text-sm text-xs text-center text-[#09030a] ${montserrat.className}`}
            >
              Desenvolvedor Fullstack
            </p>
            <h1
              className={`text-4xl md:text-6xl font-extrabold leading-10 text-purple-800 ${inter.className}`}
            >
              Ricardo Lazarini
            </h1>
          </div>
        </article>
      </section>
    </div>
  );
}
