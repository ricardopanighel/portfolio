import { Section } from "lucide-react";
import Image from "next/image";
import myImage from "../../../public/avatar-ricardo.png";

export function About() {
  return (
    <main className="w-full py-12 bg-[#000000] ">
      <section className="mx-auto px-4 container">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={myImage}
              alt="Minha foto"
              width={280}
              height={280}
              className="rounded-full object-cover max-h-[280px]"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center max-w-xl">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-left text-[#bbbad3]">
              Sobre mim
            </h1>
            <p className="text-lg leading-relaxed text-center lg:text-left text-[#bbbad3]">
              Sou estudante de Sistemas para Internet e estou em formação como
              desenvolvedor full stack. Tenho explorado tecnologias de
              front-end, back-end e banco de dados, sempre buscando aplicar na
              prática o que aprendo. Este portfólio é uma amostra do meu
              progresso, com projetos que refletem minha evolução e
              comprometimento com a área.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
