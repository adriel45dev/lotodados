"use client";
import { useEffect, useState } from "react";

type Premio = {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
};

type LocalGanhador = {
  ganhadores: number;
  municipio: string;
  nomeFatansiaUL: string;
  serie: string;
  posicao: number;
  uf: string;
};

type Loteria = {
  loteria: string;
  concurso: number;
  data: string;
  local: string;
  dezenasOrdemSorteio: string[];
  dezenas: string[];
  trevos: string[];
  timeCoracao: string;
  mesSorte: string;
  premiacoes: Premio[];
  estadosPremiados: string[];
  observacao: string;
  acumulou: boolean;
  proximoConcurso: number;
  dataProximoConcurso: string;
  localGanhadores: LocalGanhador[];
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
}[];

export default function Estatisticas({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<Loteria>([]);
  const [loading, setLoading] = useState(false);

  const URI = "https://loteriascaixa-api.herokuapp.com/api/";

  enum Jogo {
    maismilionaria,
    megasena,
    lotofacil,
    quina,
    lotomania,
    timemania,
    duplasena,
    federal,
    diadesorte,
    supersete,
  }

  const isValidUrl = (() => {
    if (!(params.slug in Jogo)) {
      window.location.href = "/404";
    }
  })();

  useEffect(() => {
    const dataJSON = localStorage.getItem(`data_${params.slug}`);

    if (dataJSON?.length) {
      setData(JSON.parse(dataJSON));
      return;
    }

    console.log("fetching data");
    console.log(loading);

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${URI}${params.slug}`);

        if (!response.ok) {
          throw new Error("Não foi possível buscar os dados");
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.length) {
      const dataJSON = JSON.stringify(data);
      localStorage.setItem(`data_${params.slug}`, dataJSON);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold">{params.slug}</h1>
      <div className="mt-8">
        {data?.map((e, i) => (
          <div className="m-8" key={i}>
            {e.dezenas.map((d, j) => (
              <span
                className="bg-green-500 hover:bg-green-600 rounded-full p-4 mx-1 text-white"
                key={j}
              >
                {d}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
