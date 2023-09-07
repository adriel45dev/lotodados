import React from "react";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

type Modalidade = {
  title: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
};

type HeroProps = {
  modalidade?: Modalidade;
};

export default function Hero({ modalidade }: HeroProps) {
  return (
    <div
      className="w-full h-96 flex flex-col justify-center items-center text-white p-16"
      style={{ backgroundColor: modalidade?.primaryColor }}
    >
      <LoteriasCaixaIcon
        className="w-16 h-16 animate-pulse"
        secondColor={modalidade?.secondaryColor}
      />
      <h1 className="text-4xl md:text-6xl font-extrabold m-4">
        {modalidade?.title}
      </h1>
    </div>
  );
}
