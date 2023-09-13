import TModalidade from "@/app/shared/types/modalidade.types";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";
import Link from "next/link";
import React from "react";

type CardModalidadeProps = {
  modalidade: TModalidade;
};

export default function CardModalidade({ modalidade }: CardModalidadeProps) {
  const { title, name, primaryColor, secondaryColor } = modalidade;
  return (
    <Link
      href={`/estatisticas/${name}`}
      className="flex justify-center items-center rounded-2xl hover:opacity-60 py-8 h-full col-span-1 "
      style={{ backgroundColor: primaryColor }}
    >
      <LoteriasCaixaIcon
        className="w-8 h-8 mr-2 text-white"
        secondColor={secondaryColor}
      />
      <span className="text-white text-2xl font text-center">{title}</span>
    </Link>
  );
}
