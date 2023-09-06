"use client";
import axios from "axios";
import { useQuery } from "react-query";

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

enum LoteriaModalidade {
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

export default function Estatisticas({ params }: { params: { slug: string } }) {
  const isValidUrl = (() => {
    if (!(params.slug in LoteriaModalidade)) {
      window.location.href = "/404";
    }
  })();

  const { data, isFetching } = useQuery<Loteria>(
    params.slug,
    async () => {
      const response = await axios.get(
        `https://loteriascaixa-api.herokuapp.com/api/${params.slug}`
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 24 * (60 * 60 * 1000), // 24horas
      cacheTime: 24 * (65 * 60 * 1000), // 24horas
    }
  );

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
