import React, { useState } from "react";

const data = [
  [1, 2, 3],
  [7, 8, 2],
];

const maxNumbers = 6;

export default function Analyse() {
  const [numberInput, setNumbersInput] = useState<string[]>(
    Array.from({ length: maxNumbers }, () => "")
  );
  const handleInputNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = e.target.value;

    if (value.length == 2) {
      if (numberInput.includes(value) && value) {
        const id = numberInput.indexOf(value);
        document.getElementById(`input_${id}`)!.classList.add("success");
        value = "";
      } else {
        e.target.blur();
        document.getElementById(`input_${(index + 1) % maxNumbers}`)!.focus();
      }
    }

    const newItems = [...numberInput];
    newItems.splice(index, 1, value);
    setNumbersInput(newItems);
  };

  const handleOut = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    let value = e.target.value;

    if (numberInput.filter((e) => e == value).length > 1 && value) {
      const id = numberInput.indexOf(value);
      document.getElementById(`input_${id}`)!.classList.add("success");

      e.target.focus();
      value = "";
    }

    const newItems = [...numberInput];
    newItems.splice(index, 1, value);
    setNumbersInput(newItems);
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.classList.remove("error", "success");
  };

  console.log(numberInput);

  return (
    <section>
      <div className="flex gap-2">
        {Array.from({ length: maxNumbers }, (_, key) => (
          <input
            key={key}
            type="number"
            id={`input_${key}`}
            value={numberInput[key]}
            min={1}
            max={60}
            onChange={(e) => handleInputNumbers(e, key)}
            onBlur={(e) => handleOut(e, key)}
            onFocus={handleFocus}
            className="number rounded-full w-16 h-16 text-center text-2xl font-bold"
          />
        ))}
      </div>
    </section>
  );
}
