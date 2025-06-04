"use client";
import { Montserrat } from "next/font/google";
import { Cinzel } from "next/font/google";
import { useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export function Header() {
  const [isOpen, setItOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setItOpen(!isOpen);
  };

  return (
    <div>
      <header className="h-[10vh] bg-[#fdfcef] flex items-center justify-between px-8">
        <a
          href=""
          className={`text-2xl font-bold text-purple-900 ${cinzel.className}`}
        >
          R
        </a>
        <button onClick={toggleNav} className={`md:hidden space-y-1 ml-auto`}>
          <span
            className={`block h-1 w-6 bg-purple-900 
                            ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-purple-900 
                            ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-purple-900 
                            ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
          ></span>
        </button>

        <ul className="text-purple-900 flex gap-6">
          <li
            className={`hover:text-[#fff] hover:bg-purple-900 transition duration-200 ease-in-out px-3 p-0.5 rounded-xl cursor-pointer hidden md:block ${montserrat.className}`}
          >
            <a href="">Início</a>
          </li>
          <li
            className={`hover:text-[#fff] hover:bg-purple-900 transition duration-200 ease-in-out px-3 p-0.5 rounded-xl cursor-pointer hidden md:block ${montserrat.className}`}
          >
            <a href="">Sobre</a>
          </li>
          <li
            className={`hover:text-[#fff] hover:bg-purple-900 transition duration-200 ease-in-out px-3 p-0.5 rounded-xl cursor-pointer hidden md:block ${montserrat.className}`}
          >
            <a href="">Projetos</a>
          </li>
          <li
            className={`hover:text-[#fff] hover:bg-purple-900 transition duration-200 ease-in-out px-3 p-0.5 rounded-xl cursor-pointer hidden md:block ${montserrat.className}`}
          >
            <a href="">Contato</a>
          </li>
        </ul>
      </header>
      <nav
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-purple-900 text-[#f7f4ee] shadow-md transition-transform duration-300 transform z-40 p-2 text-xl
        ${montserrat.className}
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul>
          <li className="pb-2.5">
            <a href="">Início</a>
          </li>
          <li className="pb-2.5">
            <a href="">Sobre</a>
          </li>
          <li className="pb-2.5">
            <a href="">Projetos</a>
          </li>
          <li className="pb-2.5">
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-30 md:hidden duration-300"
          onClick={toggleNav}
        />
      )}
    </div>
  );
}
