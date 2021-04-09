import { useEffect, useState } from "react";

const PowerBar = ({ handleClick }) => {
  const [power, setPower] = useState(0);

  useEffect(() => {
    if (power > 100) {
      handleClick("No");
    }
  }, [power]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (power > 0) {
        setPower(power - 7);
      }
    }, 100);

    return () => clearInterval(timerId);
  });

  return (
    <div className="flex">
      <div>
        <button
          onClick={() => setPower((oldPower) => oldPower + 10)}
          className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
        >
          No
        </button>
        <div className="relative pt-1 w-64">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200 w-full">
            <div
              style={{ width: `${Math.max(power, 0)}%` }}
              className="transition-all shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
            ></div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleClick("Yes")}
        className="px-2 py-1 rounded bg-red-500 opacity-80 text-white"
      >
        Yes
      </button>
    </div>
  );
};

export default PowerBar;
