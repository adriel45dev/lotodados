"use client";
import { useState, useEffect } from "react";

type LotteryNumber = number;

function Lottery() {
  const [numbers, setNumbers] = useState<LotteryNumber[]>([2, 3, 5, 7, 11, 13]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setNumbers(generateNumbers());
    }, 1000);

    return () => clearTimeout(interval);
  }, [numbers]);

  function generateNumbers() {
    const numArray = [];
    for (let i = 0; i < 6; i++) {
      numArray.push(Math.floor(Math.random() * 60) + 1);
    }
    return numArray;
  }

  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-row gap-2 my-4 text-endeavour-600">
        {numbers.map((n, key) => (
          <span
            key={key}
            className="animate-pulse text-lg w-10 h-10 font-bold bg-white rounded-full flex justify-center items-center"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Lottery;
