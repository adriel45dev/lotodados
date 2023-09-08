import ApexCharts from "apexcharts";
import React, { useState } from "react";
import { useEffect } from "react";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";
import ChartPinIcon from "@/public/icons/CharPinIcon";

type Modalidade = {
  title: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  numeros: number;
};
type CharProps = {
  data?: string[][] | undefined;
  modalidade?: Modalidade | undefined;
};

type TChartData = {
  x: string;
  y: number;
};

type TDezenas = string[][];

export default function Chart({ data, modalidade }: CharProps) {
  const [totalConcursos, setTotalConcursos] = useState(0);
  const [max, setMax] = useState<number | null>(0);
  const [min, setMin] = useState<number | null>(0);

  const loadChart = (chartData: TChartData[]) => {
    const options = {
      colors: ["#1A56DB", "#FDBA8C"],
      series: [
        {
          name: "Eventos",
          color: "#1A56DB",
          data: chartData,
        },
      ],
      chart: {
        type: "bar",
        width: "100%",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
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
          top: -14,
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
        show: false,
      },
      fill: {
        opacity: 1,
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

  const findMaxAndMinEvents = (chartData: TChartData[]) => {
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

  const generateChartData = (
    numeros: number,
    dezenas: TDezenas
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
    return chartData;
  };

  useEffect(() => {
    if (data && modalidade) {
      const dezenas = data;
      const concursos = dezenas?.length;
      let numeros = modalidade?.numeros ?? 0;

      numeros++;

      setTotalConcursos(concursos);

      const chartData = generateChartData(numeros, dezenas);
      findMaxAndMinEvents(chartData);
      loadChart(chartData);
    }
  }, [data, modalidade]);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <LoteriasCaixaIcon className="w-8 h-8 text-endeavour-600" />
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              {totalConcursos}
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Ocorrências históricas
            </p>
          </div>
        </div>
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
            <ChartPinIcon className="w-6 h-6" />
            ORDEM
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
      <div id="column-chart" />
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Ordem
            <svg
              className="w-2.5 m-2.5 ml-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="lastDaysdropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Yesterday
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 7 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 90 days
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
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
    </div>
  );
}
