import React, { useEffect, useState } from "react";
import TModalidade from "@/app/shared/types/modalidade.types";
import NextIcon from "@/public/icons/nextIcon";
import ApexCharts from "apexcharts";
import PreviousIcon from "@/public/icons/previousIcon";

type NumbersProps = {
  data?: string[][];
  modalidade?: TModalidade;
};

type TChartData = {
  x: string;
  y: number;
};

export default function Numbers({ data, modalidade }: NumbersProps) {
  const [inputNumber, setInputNumber] = useState("");
  const [numbersData, setNumberRelate] = useState<TChartData[][]>();
  const [numberReference, setNumberReference] = useState<number | null>(
    modalidade?.startPoin || 1
  );
  const [mapNumberReference, setMapNumberReference] = useState<TChartData[]>();

  const quickSort = (arr: TChartData[], ascending: boolean): TChartData[] => {
    if (arr.length < 2) return arr;

    const pivot = arr[0].y;
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (ascending) {
        if (arr[i].y < pivot) left.push(arr[i]);
        else right.push(arr[i]);
      } else {
        if (arr[i].y > pivot) left.push(arr[i]);
        else right.push(arr[i]);
      }
    }

    return [
      ...quickSort(left, ascending),
      arr[0],
      ...quickSort(right, ascending),
    ];
  };

  const loadData = () => {
    if (!data || !modalidade) return;

    const numbers = Array.from({ length: modalidade?.totalNumbers }, (n) =>
      Array.from({ length: modalidade?.totalNumbers }, (_, i) => ({
        x: i.toString(),
        y: 0,
      }))
    );
    data.forEach((concurso) => {
      concurso.forEach((n, i, arr) => {
        let numberRelated = [...arr];
        numberRelated.splice(i, 1);

        numberRelated.forEach((r) => {
          numbers[+n][+r].y += 1;
        });
      });
    });

    setNumberRelate(numbers);
  };

  useEffect(() => {
    if (!numbersData) return;

    const charData = quickSort(numbersData?.[numberReference!], false);

    charData.splice(
      charData.findIndex((e) => e.x == numberReference!.toString()),
      1
    );

    if (modalidade?.startPoin == 1) {
      charData.splice(
        charData.findIndex((e) => e.x == "0"),
        1
      );
    }

    setMapNumberReference(charData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberReference, numbersData]);

  useEffect(() => {
    if (!data || !modalidade) return;

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!mapNumberReference) return;
    loadChart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapNumberReference]);

  const loadChart = () => {
    document.getElementById("column-chart")!.innerHTML = "";

    const options = {
      colors: [modalidade?.primaryColor, modalidade?.secondaryColor],
      responsive: [
        {
          breakpoint: undefined,
          options: {},
        },
      ],

      dataLabels: {
        enabled: true,
      },

      series: mapNumberReference?.map((e) => e.y),
      labels: mapNumberReference?.map((e) => e.x),

      chart: {
        type: "donut",
        width: "100%",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: true,
        },
        redrawOnWindowResize: false,
      },
      plotOptions: {
        pie: {
          customScale: 1,
          size: 100,
          donut: {
            size: "45%",
            labels: {
              show: true,
            },
          },
          expandOnClick: true,
        },
      },
    };

    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart"),
        options
      );
      chart.render();
    }
  };
  const handlerNextNumber = () => {
    setNumberReference(
      (prevNumberReference) =>
        (prevNumberReference! + 1) % modalidade!.totalNumbers
    );
  };

  const handlerPreviousNumber = () => {
    setNumberReference(
      (prevNumberReference) =>
        (prevNumberReference! - 1 + modalidade!.totalNumbers) %
        modalidade!.totalNumbers
    );
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > modalidade!.endPoint) return;

    if (+e.target.value < modalidade!.startPoin) {
      setInputNumber("");
      setNumberReference(modalidade!.startPoin);
      return;
    }
    setInputNumber(e.target.value);
    setNumberReference(+e.target.value);
  };

  return (
    <div className="flex flex-col my-8 select-non w-full px-4 md:px-32">
      <div className="flex flex-row justify-center items-center gap-4">
        <button
          className=" text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8 focus:ring-4 focus:outline-none focus:ring-slate-300 "
          style={{
            backgroundColor: modalidade?.primaryColor,
          }}
          onClick={handlerPreviousNumber}
        >
          <PreviousIcon className="w-8 h-8" />
        </button>
        <div
          className="w-16 h-16 text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8"
          style={{
            backgroundColor: modalidade?.primaryColor,
          }}
        >
          <span>{numberReference}</span>
        </div>

        <button
          type="button"
          className="text-2xl font-normal rounded-full text-white flex justify-center items-center hover:opacity-50 mb-8"
          style={{
            backgroundColor: modalidade?.primaryColor,
          }}
          onClick={handlerNextNumber}
        >
          <NextIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 mb-8">
        {mapNumberReference &&
          mapNumberReference?.map((e, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-center items-center group"
            >
              <button
                type="button"
                className=" text-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-16 h-16"
                style={{
                  backgroundColor: modalidade?.secondaryColor,
                }}
              >
                {e.x}
              </button>
              <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg shadow-sm  tooltip dark:bg-gray-700 bottom-[68px] opacity-0 group-hover:opacity-100">
                {e.y}
                <div data-popper-arrow></div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        Buscar por número:
        <div>
          <input
            type="number"
            max={modalidade?.endPoint}
            min={modalidade?.startPoin}
            value={inputNumber}
            onChange={handleNumberInput}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-full p-8">
        <div id="column-chart" className="min-w-full md:min-w-[600px] "></div>
      </div>

      <div className="flex flex-col ">
        <h2 className="text-2xl font-bold text-endeavour-600 py-4">
          Sobre a análise dos números
        </h2>
        <p className=" text-gray-600">
          Nesta seção você pode analisar a <strong>frequência</strong> com que
          certos números são sorteados na loteria. Isso permite identificar
          quais são os números {`"quentes"`} e {`"frios"`}, ou seja, aqueles que
          são sorteados com mais ou menos frequência. Por exemplo, você pode
          verificar quais são os números que mais saem junto com o número 2 nas
          extrações. Nossa análise mostra os números que mais aparecem em
          conjunto com outro nos últimos sorteios. Isso pode ajudá-lo a montar
          sua aposta de maneira mais estratégica, combinando tanto números
          frequentemente sorteados quanto aqueles raramente escolhidos, a fim de
          aumentar suas chances de acerto. Explore os dados dos últimos sorteios
          e descubra combinações de números com maior probabilidade estatística
          de serem premiados. Boa sorte!
        </p>
      </div>
    </div>
  );
}
