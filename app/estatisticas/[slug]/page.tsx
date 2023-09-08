"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { MODALIDADES_LOTERIA } from "@/app/config";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Chart from "@/app/components/Chart";
import EstatisticasCard from "@/app/components/EstatisticasCard";
import Loading from "@/app/components/Loading";

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

type Modalidade = {
  title: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  numeros: number;
};

export default function Estatisticas({ params }: { params: { slug: string } }) {
  const [modalidade, setModalidade] = useState<Modalidade>();

  const isValidUrl = (() => {
    if (!(params.slug in LoteriaModalidade)) {
      window.location.href = "/404";
      return false;
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
  const dezenas = data?.map((value) => value.dezenas);

  useEffect(() => {
    const [prevModalidade] = MODALIDADES_LOTERIA.filter(
      (m) => m.name == params.slug
    );

    if (prevModalidade) {
      setModalidade(prevModalidade);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className="flex flex-col justify-center items-center max-w-screen">
      <Hero modalidade={modalidade} />

      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Header />
          <EstatisticasCard title="Ocorrências Históricas">
            <Chart data={dezenas} modalidade={modalidade} />
          </EstatisticasCard>
        </>
      )}
    </main>
  );
}
