import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

import Link from "next/link";

import { MODALIDADES_LOTERIA } from "../config";
import Lottery from "./Lottery";

export default function Hero() {
  return (
    <section>
      <div className="bg-gray-100 sm:grid grid-cols-5 px-0 py-0 md:py-6 md:px-4 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="h-screen col-span-4 bg-endeavour-600 rounded-md flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center px-8">
            <LoteriasCaixaIcon
              className="w-16 h-16 text-white hover:animate-bounce"
              secondColor={"#F99500"}
            />

            <h2 className=" text-6xl text-white font-normal font mb-8">
              Loterias
            </h2>
            <p className="text-slate-100 mt-4 text-justify md:text-left">
              Análise de dados avançada para identificar padrões nos resultados
              dos jogos da loteria. Nosso algoritmo vasculha milhões de
              resultados passados para encontrar probabilidades, frequências e
              outras tendências que podem ajudar você a tomar decisões mais
              inteligentes sobre seus jogos.
            </p>

            <Lottery />

            <Link
              href={"/estatisticas"}
              className="uppercase inline-block m-4 text-sm bg-pizazz-500 text-white py-2 px-4 rounded font-semibold hover:bg-pizazz-600 focus:outline-none focus:ring-2 focus:ring-pizazz-400"
            >
              ANALISAR
            </Link>
          </div>
        </div>
        <div className="h-auto col-span-1 overflow-hidden">
          <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
            <input
              type="text"
              placeholder="buscar"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-endeavour-600 focus:border-endeavour-600 block w-full p-2.5 mr-2 "
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-white  rounded-md">
            <h1 className="text-center text-xl my-4  bg-[#F99500] py-2 rounded-md border-b-2 cursor-pointer  text-white">
              Jogos
            </h1>
            <div className="bg-white rounded-md list-none text-center font-bold text-sm">
              {MODALIDADES_LOTERIA.map((e, i) => {
                return (
                  <Link
                    href={`/estatisticas/${e.name}`}
                    key={i}
                    className={
                      "py-4 border-b-2 group hover:scale-125 hover:bg-orange-100 rounded-2xl flex flex-col items-center"
                    }
                    style={{
                      color: e.primaryColor,
                    }}
                  >
                    <div className="grid grid-cols-6 justify-center items-center gap-3 px-auto ">
                      <div className="col-span-2 flex justify-end items-center ">
                        <LoteriasCaixaIcon
                          className="w-6 h-6"
                          primaryColor={e.primaryColor}
                          secondColor={e.secondaryColor}
                        />
                      </div>

                      <span className="col-span-4 text-start">{e.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
