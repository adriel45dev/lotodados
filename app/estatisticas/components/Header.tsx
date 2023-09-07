import React from "react";

export default function Header() {
  return (
    <div className="my-4">
      <ul className="flex">
        <li className="flex-1 mr-2">
          <a
            className="text-center block border border-pizazz-400 rounded py-2 px-4 bg-pizazz-500 hover:bg-pizazz-600 text-white"
            href="#"
          >
            Ocorrências
          </a>
        </li>
        <li className="flex-1 mr-2">
          <a
            className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            href="#"
          >
            Histórico
          </a>
        </li>
        <li className="text-center flex-1">
          <a
            className="block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Pesquisa
          </a>
        </li>
      </ul>
    </div>
  );
}
