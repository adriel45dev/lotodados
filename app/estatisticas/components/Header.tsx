import React, { useState } from "react";

type HeaderProps = {
  onActiveTab: (tab: string) => void;
  activeTab: string;
};

export default function Header({ onActiveTab, activeTab }: HeaderProps) {
  //const [activeTab, setActiveTab] = useState("Ocorrências");
  return (
    <nav className="w-full flex flex-row justify-center items-center py-4 px-4 mx-auto">
      <ul className="grid grid-cols-2 grid-rows-2 justify-center items-center md:flex	gap-2">
        <li className="w-full" onClick={() => onActiveTab("Ocorrências")}>
          <button className={activeTab == "Ocorrências" ? "btn-active" : "btn"}>
            Ocorrências
          </button>
        </li>
        <li onClick={() => onActiveTab("Números")}>
          <button className={activeTab == "Números" ? "btn-active" : "btn"}>
            Números
          </button>
        </li>
        <li onClick={() => onActiveTab("Concursos")}>
          <button className={activeTab == "Concursos" ? "btn-active" : "btn"}>
            Concursos
          </button>
        </li>
        <li onClick={() => onActiveTab("Analisar")}>
          <button className={activeTab == "Analisar" ? "btn-active" : "btn"}>
            Analisar
          </button>
        </li>
      </ul>
    </nav>
  );
}
