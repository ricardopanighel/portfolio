import * as React from "react";
import { Montserrat } from "next/font/google";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export function CarouselDemo() {
  return (
    <section>
      <h1 className={`${montserrat.className} font-bold text-4xl text-center py-6 `}>PROJETOS</h1>
      <div className="flex h-[90vh] w-full items-center justify-center bg-[#000000]">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem className="flex aspect-square items-center justify-center p-6 text-[#bbbad3]">
              {/* Conteúdo do slide 1 */}
              <span className="text-4xl font-semibold">1</span>
            </CarouselItem>
            <CarouselItem className="flex aspect-square items-center justify-center p-6">
              {/* Conteúdo do slide 2 */}
              <span className="text-4xl font-semibold">2</span>
            </CarouselItem>
            <CarouselItem className="flex aspect-square items-center justify-center p-6">
              {/* Conteúdo do slide 3 */}
              <span className="text-4xl font-semibold">3</span>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
