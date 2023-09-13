import TModalidade from "@/app/shared/types/modalidade.types";
import TLoteria from "@/app/shared/types/loteria.types";
import React, { useState, useEffect } from "react";
import { THEME_COLOR } from "@/app/config";

type AnalyseTableProps = {
  data?: TLoteria[];
  modalidade?: TModalidade;
};

type TNumberTable = {
  number: number;
  status: boolean;
};

export default function AnalyseTable({ data, modalidade }: AnalyseTableProps) {
  const [table, setTable] = useState<TNumberTable[]>([]);

  const numberSelection = table
    .filter((table) => table.status)
    .sort((a, b) => {
      return a.number - b.number;
    });

  useEffect(() => {
    const tableNumber = [];
    for (let i = modalidade!.startPoin; i <= modalidade!.endPoint; i++) {
      tableNumber.push({ number: i, status: false });
    }
    setTable(tableNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNumberSelection = (key: number) => {
    const newTable = [...table];

    if (table.filter((t) => t.status).length >= modalidade!.maxNumbers) {
      newTable.splice(key, 1, {
        ...newTable[key],
        status: false,
      });
    } else {
      newTable.splice(key, 1, {
        ...newTable[key],
        status: !newTable[key].status,
      });
    }

    setTable(newTable);
  };

  return (
    <section>
      <div className="flex flex-row flex-wrap gap-2 px-8 mb-8 justify-center items-center">
        {table.map((table, key) => (
          <button
            key={key}
            className="w-12 h-12 text-2xl text-white rounded-full flex justify-center items-center"
            style={{
              backgroundColor: table.status
                ? THEME_COLOR.orange
                : modalidade?.primaryColor,
            }}
            onClick={() => handleNumberSelection(key)}
          >
            {table.number}
          </button>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-2 px-8 justify-center items-center">
        {numberSelection.map((t, key) => (
          <span
            key={key}
            className="w-12 h-12 text-2xl text-white rounded-full flex justify-center items-center bg-green-500"
          >
            {t.number}
          </span>
        ))}
      </div>
    </section>
  );
}
