import Link from "next/link";
import LogoIcon from "@/public/icons/LogoIcon";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

export default function Navbar() {
  return (
    <header>
      <nav className="shadow">
        <div className="flex justify-between items-center py-6 px-10 container mx-auto">
          <div>
            <Link href={"/"} className="flex justify-center items-center">
              <LoteriasCaixaIcon
                className="w-8 h-8 mx-2"
                primaryColor="#F99500"
                secondColor="#0065B7"
              />
              <h1 className="text-2xl font-normal text-endeavour-600 hover:cursor-pointer hover:text-endeavour-400">
                Lotodados
              </h1>
            </Link>
          </div>

          <div>
            <div className="hover:cursor-pointer sm:hidden">
              <span className="h-1 rounded-full block w-8 mb-1 bg-slate-600"></span>
              <span className="h-1 rounded-full block w-8 mb-1 bg-slate-600"></span>
              <span className="h-1 rounded-full block w-8 mb-1 bg-slate-600"></span>
            </div>

            <div className="flex items-center">
              <ul className="sm:flex space-x-4 hidden items-center">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Análise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Concursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Histórico
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 text-md "
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-3 p-4 transition-all hidden">
          <ul className="flex flex-col justify-center items-center bg-gray-100 rounded-2xl p-2 text-center text-base">
            <li className="w-full rounded-2xl">
              <a
                href="#"
                className="text-sky-800 hover:text-indigo-600 text-md "
              >
                Análise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 text-md "
              >
                Histórico
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 text-md "
              >
                Concursos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 text-md "
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 text-md "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
