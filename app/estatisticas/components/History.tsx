import React, { useState, useEffect } from "react";
import BackIcon from "@/public/icons/BackIcon";
import NextIcon from "@/public/icons/nextIcon";
import TrevoIcon from "@/public/icons/TrevoIcon";
import TLoteria from "@/app/shared/types/loteria.types";
import TModalidade from "@/app/shared/types/modalidade.types";

type HistoryProps = {
  data?: TLoteria[];
  modalidade?: TModalidade;
};

export default function History({ data, modalidade }: HistoryProps) {
  const [currConcurso, setCurrConcurso] = useState<number>(data![0]!.concurso);
  const [indexConcurso, setIndexConcurso] = useState(0);
  const [inputConcurso, setInputConcurso] = useState("");

  const concurso = data![indexConcurso];

  const handlerNextNumber = () => {
    setIndexConcurso(
      (prevIndex) => (prevIndex - 1 + data!.length) % data!.length
    );
  };

  const handlerPreviousNumber = () => {
    setIndexConcurso((prevIndex) => (prevIndex + 1) % data!.length);
  };

  const handleConcursoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > data!.length || +e.target.value < 1) return;
    setInputConcurso(e.target.value);
    setIndexConcurso(Math.abs(+e.target.value - data!.length));
  };

  return (
    <div className="flex flex-col select-none justify-center items-center w-full">
      <h2 className="text-slate-500 text-2xl font-extrabold p-2 mb-4 mx-20">
        Concurso nº {concurso.concurso}
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 px-2">
        <button
          className=" text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8 focus:ring-4 focus:outline-none focus:ring-slate-300 "
          style={{
            backgroundColor: modalidade?.primaryColor,
          }}
          onClick={handlerPreviousNumber}
        >
          <BackIcon className="w-8 h-8" />
        </button>

        <div className="flex flex-row flex-wrap justify-center items-center gap-2">
          {concurso.dezenas.map((d, i) => (
            <div
              key={i}
              className="bg-emerald-600 w-10 h-10 text-lg  md:w-16 md:h-16 md:text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8"
              style={{
                backgroundColor: modalidade?.primaryColor,
              }}
            >
              <span>{d}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8"
          style={{
            backgroundColor: modalidade?.primaryColor,
          }}
          onClick={handlerNextNumber}
        >
          <NextIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-row justify-center items-center gap-2 mb-4">
        <h2 className="text-sm ">Trevos sorteados: </h2>
        {concurso.trevos &&
          concurso.trevos.map((t, ti) => (
            <div key={ti} className="relative">
              <TrevoIcon
                className="w-8 h-8 md:w-12 md:h-12 hover:text-gray-500"
                color={modalidade?.primaryColor}
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm md:text-2xl text-white">
                {t}
              </span>
            </div>
          ))}
      </div>

      <div className="flex flex-col justify-center items-center mb-4">
        Buscar por concurso:
        <div>
          <input
            type="number"
            max={data?.length}
            min={1}
            value={inputConcurso}
            onChange={handleConcursoInput}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="overflow-hidden w-full flex flex-col justify-center items-center">
        <table className=" text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Premiações
              </th>

              <th scope="col" className="px-6 py-3">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody>
            {concurso.premiacoes.map((e, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                >
                  R$ {new Intl.NumberFormat("pt-BR").format(e.valorPremio)}
                </th>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex flex-wrap"
                >
                  {e.descricao}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
