"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { MODALIDADES_LOTERIA } from "@/app/config";
import Hero from "../components/Hero";
import Header from "../components/Header";
// import Chart from "@/app/estatisticas/components/Chart";
import EstatisticasCard from "@/app/components/EstatisticasCard";
import Loading from "@/app/components/Loading";
import TModalidade from "@/app/shared/types/modalidade.types";
import TLoteria from "@/app/shared/types/loteria.types";
import Numbers from "../components/Numbers";
import History from "../components/History";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/app/estatisticas/components/Chart"), {
  ssr: false,
});

enum ELoteriaModalidade {
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
  const [modalidade, setModalidade] = useState<TModalidade>();
  const [activeTab, setActiveTab] = useState("Ocorrências");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const { data, isFetching } = useQuery<TLoteria[]>(
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
  const setCurrentCategory = () => {
    const [prevModalidade] = MODALIDADES_LOTERIA.filter(
      (m) => m.name == params.slug
    );

    if (prevModalidade) {
      setModalidade(prevModalidade);
    }
  };

  useEffect(() => {
    setCurrentCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className="flex flex-col justify-center items-center max-w-screen">
      <Hero modalidade={modalidade} />

      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Header onActiveTab={handleActiveTab} activeTab={activeTab} />

          <EstatisticasCard title={activeTab}>
            {activeTab == "Ocorrências" && (
              <Chart data={dezenas} modalidade={modalidade} />
            )}
            {activeTab == "Números" && (
              <Numbers data={dezenas} modalidade={modalidade} />
            )}
            {activeTab == "Concursos" && (
              <History data={data} modalidade={modalidade} />
            )}
          </EstatisticasCard>
        </>
      )}
    </main>
  );
}
