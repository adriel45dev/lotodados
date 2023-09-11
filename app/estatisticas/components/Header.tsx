import React, { useState } from "react";

type HeaderProps = {
  onActiveTab: (tab: string) => void;
  activeTab: string;
};

export default function Header({ onActiveTab, activeTab }: HeaderProps) {
  //const [activeTab, setActiveTab] = useState("Ocorrências");
  return (
    <div className="my-4 p-4">
      <ul className="flex felx-row justify-center items-center flex-wrap">
        <li className="flex-1 mr-2" onClick={() => onActiveTab("Ocorrências")}>
          <button className={activeTab == "Ocorrências" ? "btn-active" : "btn"}>
            Ocorrências
          </button>
        </li>
        <li className="flex-1 mr-2" onClick={() => onActiveTab("Números")}>
          <button className={activeTab == "Números" ? "btn-active" : "btn"}>
            Números
          </button>
        </li>
        <li className="flex-1 mr-2" onClick={() => onActiveTab("Concursos")}>
          <button className={activeTab == "Concursos" ? "btn-active" : "btn"}>
            Concursos
          </button>
        </li>
        <li className="flex-1 mr-2" onClick={() => onActiveTab("Analisar")}>
          <button className={activeTab == "Analisar" ? "btn-active" : "btn"}>
            Analisar
          </button>
        </li>
      </ul>
    </div>
  );
}
