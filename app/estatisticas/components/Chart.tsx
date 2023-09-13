"use client";
import ApexCharts from "apexcharts";
import React, { useState } from "react";
import { useEffect } from "react";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";
import ChartPinIcon from "@/public/icons/CharPinIcon";
import TModalidade from "@/app/shared/types/modalidade.types";

type TChartProps = {
  data?: string[][] | undefined;
  modalidade?: TModalidade | undefined;
};

type TChartData = {
  x: string;
  y: number;
};

enum EChartOrientation {
  ORDER = "ORDER",
  ASC = "ASC",
  DES = "DES",
  ODD = "ODD",
  EVEN = "EVEN",
  EVEN_ASC = "EVEN_ASC",
  EVEN_DES = "EVEN_DES",
  ODD_ASC = "ODD_ASC",
  ODD_DES = "ODD_DES",
}

type TDezenas = string[][];

export default function Chart({ data, modalidade }: TChartProps) {
  const [totalEvents, setTotalEvents] = useState(0);
  const [max, setMax] = useState<number | null>(0);
  const [min, setMin] = useState<number | null>(0);
  const [chartView, setChartView] = useState<EChartOrientation>(
    EChartOrientation.DES
  );
  const [seriesData, setSeriesData] = useState<TChartData[]>();

  const setMaxAndMinEvents = (chartData: TChartData[]) => {
    let maxY = chartData[0].y;
    let maxX = Number(chartData[0].x);
    let minY = Infinity;
    let minX = NaN;

    for (let i = 1; i < chartData.length; i++) {
      if (chartData[i].y > maxY) {
        maxY = chartData[i].y;
        maxX = Number(chartData[i].x);
      }

      if (chartData[i].y < minY && chartData[i].y !== 0) {
        minY = chartData[i].y;
        minX = Number(chartData[i].x);
      }
    }

    if (isNaN(minX)) {
      minX = 0;
    }

    setMin(minX);
    setMax(maxX);
  };

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

  const getChartData = (
    numeros: number,
    dezenas: TDezenas,
    orientation: EChartOrientation
  ): TChartData[] => {
    const chartData = Array.from({ length: numeros }, (_, i) => ({
      x: i.toString(),
      y: 0,
    }));

    if (chartData.length >= numeros) {
      dezenas.forEach((d) => {
        d.forEach((n) => {
          chartData[+n].y += 1;
        });
      });
    }

    if (orientation == EChartOrientation.ORDER) {
      return chartData;
    }

    if (orientation == EChartOrientation.ASC) {
      return quickSort(chartData, true);
    }

    if (orientation == EChartOrientation.DES) {
      return quickSort(chartData, false);
    }

    if (orientation == EChartOrientation.EVEN) {
      return chartData.filter((e) => +e.x % 2 == 0);
    }

    if (orientation == EChartOrientation.ODD) {
      return chartData.filter((e) => +e.x % 2 !== 0);
    }

    if (orientation == EChartOrientation.EVEN_ASC) {
      return quickSort(
        chartData.filter((e) => +e.x % 2 == 0),
        true
      );
    }

    if (orientation == EChartOrientation.EVEN_DES) {
      return quickSort(
        chartData.filter((e) => +e.x % 2 == 0),
        false
      );
    }

    if (orientation == EChartOrientation.ODD_ASC) {
      return quickSort(
        chartData.filter((e) => +e.x % 2 !== 0),
        true
      );
    }

    if (orientation == EChartOrientation.ODD_DES) {
      return quickSort(
        chartData.filter((e) => +e.x % 2 !== 0),
        false
      );
    }

    return chartData;
  };

  const loadChart = () => {
    if (typeof window == "undefined") return;
    document.getElementById("column-chart")!.innerHTML = "";

    const options = {
      colors: [modalidade?.primaryColor, modalidade?.secondaryColor],

      responsive: [
        {
          breakpoint: undefined,
          options: {},
        },
      ],

      series: [
        {
          name: "Eventos",
          color: modalidade?.primaryColor,
          data: seriesData,
        },
      ],
      chart: {
        type: "bar",
        width: "100%",
        height: 1500,
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: true,
        },
        redrawOnWindowResize: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadiusApplication: "end",
          borderRadius: 4,
          barHeight: "90%",
          distributed: true,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 2,
          bottom: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
      },
      fill: {
        opacity: 0.8,
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

  const loadData = () => {
    if (!data || !modalidade) return;
    setTotalEvents(data?.length);
    const chartData = getChartData(modalidade.totalNumbers, data, chartView);
    setMaxAndMinEvents(chartData);
    setSeriesData(chartData);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newView = e.target.value as EChartOrientation;
    setChartView(newView);
  };

  useEffect(() => {
    if (seriesData) {
      loadChart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seriesData, chartView]);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, modalidade?.totalNumbers, chartView]);

  return (
    <div className="w-full h-max bg-white rounded-lg dark:bg-gray-800 px-4 md:px-32">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <LoteriasCaixaIcon
              className="w-8 h-8 text-endeavour-600"
              primaryColor={modalidade?.primaryColor}
              secondColor={modalidade?.secondaryColor}
            />
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              {totalEvents}
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Ocorrências históricas
            </p>
          </div>
        </div>
        <div>
          <span
            className={`  text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ${
              ["ORDER", "ODD", "EVEN"].includes(chartView) &&
              "bg-blue-100 text-blue-800"
            } ${
              ["ASC", "ODD_ASC", "EVEN_ASC"].includes(chartView) &&
              "bg-red-100 text-red-800"
            } ${
              ["DES", "ODD_DES", "EVEN_DES"].includes(chartView) &&
              "bg-green-100 text-green-800"
            }`}
          >
            <ChartPinIcon className="w-6 h-6" />
            <span>{chartView}</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
            Maior ocorrência:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {max}
          </dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
            Menor ocorrência:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {min}
          </dd>
        </dl>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen w-full ">
        <div id="column-chart" className="flex flex-col w-full mx-8" />
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSelect}
            value={chartView}
          >
            <option value={EChartOrientation.ORDER}>Ordem</option>
            <option value={EChartOrientation.ASC}>Ascendente</option>
            <option value={EChartOrientation.DES}>Descendente</option>
            <option value={EChartOrientation.ODD}>Números Impares</option>
            <option value={EChartOrientation.ODD_ASC}>
              Números Impares Ascendente
            </option>
            <option value={EChartOrientation.ODD_DES}>
              Números Impares Descendente
            </option>
            <option value={EChartOrientation.EVEN}>Números Pares</option>
            <option value={EChartOrientation.EVEN_ASC}>
              Números Pares Ascendente
            </option>
            <option value={EChartOrientation.EVEN_DES}>
              Números Pares Descendente
            </option>
          </select>

          <a
            href={modalidade?.channel}
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            REGRAS DO CONCURSO
            <svg
              className="w-2.5 h-2.5 ml-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col ">
        <h2 className="text-2xl font-bold text-endeavour-600 py-4">
          Sobre a análise das ocorrências
        </h2>
        <p className=" text-gray-600">
          Nesta seção você encontra uma análise completa sobre quais números são
          sorteados com mais frequência na loteria. Os números são exibidos em
          ordem decrescente, desde o mais sorteado até o menos sorteado, para
          que você identifique rapidamente quais são os {`"números quentes"`}{" "}
          atualmente. Além disso, é possível ordenar os dados de diversas
          maneiras, para analisar os números sob diferentes perspectivas: ordem
          crescente, ordem decrescente, números ímpares, números ímpares
          crescente, números ímpares decrescente, números pares, números pares
          crescente e números pares decrescente. Com essas opções, você consegue
          obter insights valiosos sobre os padrões nos sorteios, ajudando a
          montar sua aposta de maneira estratégica e aumentar suas chances de
          ganhar. Não perca tempo e comece já a analisar os números mais
          quentes!
        </p>
      </div>
    </div>
  );
}
