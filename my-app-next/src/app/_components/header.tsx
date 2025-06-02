import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
})

export function Header(){
    return (
        <div>
            <header className="h-[10vh] bg-gray-950 flex items-center justify-center md:justify-between px-8">
                <a href=""
                className={`text-2xl font-bold text-white ${cinzel.className}`}
                >
                    R
                </a>
                <ul className="text-white flex gap-6">
                    <li className="hover:text-[#d5dada] cursor-pointer hidden md:block"><a href="">Início</a></li>
                    <li className="hover:text-[#d5dada] cursor-pointer hidden md:block"><a href="">Sobre</a></li>
                    <li className="hover:text-[#d5dada] cursor-pointer hidden md:block"><a href="">Projetos</a></li>
                    <li className="hover:text-[#d5dada] cursor-pointer hidden md:block"><a href="">Contato</a></li>
                </ul>
            </header>
        </div>
    );
}