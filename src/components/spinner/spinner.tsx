"use client";

import React, { useState } from "react";

interface SpinnerProps {
  initialValue?: number;
  onIncrease?: (value: number) => void;
  onDecrease?: (value: number) => void;
}

const Spinner: React.FC<SpinnerProps> = ({ initialValue = 1, onIncrease, onDecrease }) => {
  const [value, setValue] = useState(initialValue);

  const increase = () => {
    setValue((prev) => prev + 1);
    if (onIncrease) onIncrease(value + 1);
  };

  const decrease = () => {
    setValue((prev) => Math.max(1, prev - 1));
    if (onDecrease) onDecrease(Math.max(1, value - 1));
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrease}
        className="px-3 py-1 border cursor-pointer disabled:text-[#C2BFBC] disabled:cursor-not-allowed"
        disabled={value <= 1}
      >
        -
      </button>
      <span className="w-10 text-center">{value}</span>
      <button onClick={increase} className="px-3 py-1 border cursor-pointer">
        +
      </button>
    </div>
  );
};

export default Spinner;
