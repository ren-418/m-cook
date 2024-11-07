import Add from "../../../icons/button/Add";
import Minus from "../../../icons/button/Minus";
import React from "react";

type NumberInputProps = {
  width: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function NumberInput({ width, count = 0, setCount }: NumberInputProps) {
  return (
    <div
      className={`flex flex-row justify-center text-m border gap-2.5 border-neutral-black rounded-lg items-center`}
      style={{ width: width, userSelect: "none" }}
    >
      <Minus className="hover:bg-neutral-100 rounded-md transition-all" onClick={() => { count > 1 && setCount(count - 1) }} />
      {count}
      <Add className="hover:bg-neutral-100 rounded-md transition-all" onClick={() => { setCount(count + 1) }} />
    </div>
  );
}
