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
    <div>
      <div className="flex mb-4 justify-between">
        <div>
          <button
            onClick={() => setPower((oldPower) => oldPower + 10)}
            className="no-button mr-4"
          >
            No
          </button>
        </div>
        <button onClick={() => handleClick("Yes")} className="yes-button">
          Yes
        </button>
      </div>
      <div className="relative pt-1 w-64">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 w-full">
          <div
            style={{ width: `${Math.max(power, 0)}%` }}
            className="transition-all shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PowerBar;
