import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

import Link from "next/link";

import { MODALIDADES_LOTERIA } from "../config";

export default function Hero() {
  return (
    <section>
      <div className="bg-gray-100 sm:grid grid-cols-5 px-0 py-0 md:py-6 md:px-4 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="h-screen col-span-4 bg-gradient-to-tr from-endeavour-800 to-endeavour-500 rounded-md flex flex-col justify-center items-center">
          <div className=" w-80 flex flex-col justify-center items-center">
            <LoteriasCaixaIcon className="w-16 h-16 animate-pulse animation-duration-5000 text-white" />

            <h2 className="text-white text-6xl">Loterias</h2>
            <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              dolore?
            </p>

            <div className="flex flex-row gap-2 my-4 text-endeavour-600">
              <span className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center">
                0
              </span>
              <span className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center">
                0
              </span>
              <span className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center">
                0
              </span>
              <span className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center">
                0
              </span>
              <span className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center">
                0
              </span>
            </div>

            <a
              href="#"
              className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
            >
              ANALISAR
            </a>
          </div>
        </div>
        <div className="h-auto col-span-1 overflow-hidden">
          <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
            <input
              type="text"
              placeholder="seach"
              className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
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
