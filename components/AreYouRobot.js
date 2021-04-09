import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AreYouRobot = () => {
  const [squares, setSquares] = useState(
    [...Array(16).keys()].reduce((obj, index) => {
      obj[index] = false;
      return obj;
    }, {})
  );

  const handleSelect = (index) => {
    setSquares({ ...squares, [index]: !squares[index] });
  };

  return (
    <div className="relative p-2 border-gray-200 border">
      <div className="bg-blue-600 opacity-80 text-white p-4">
        <p>Select all squares with</p>
        <p className="text-2xl font-extrabold">Planet Earth</p>
        <p>If there are none, click skip.</p>
      </div>
      <div className="grid-cols-4 grid">
        {Object.keys(squares).map((square, i) => (
          <div
            className="border border-white w-16 h-16 relative transition-all cursor-pointer"
            style={{ transform: squares[square] ? "scale(0.85)" : "none" }}
            onClick={() => handleSelect(square)}
          >
            {squares[square] && (
              <FaCheckCircle className="text-blue-600 absolute left-0 top-0 text-xl bg-white rounded-full -mx-1 -my-1" />
            )}
            <img src={`/galaxy/Slice ${i + 1}.png`} />
          </div>
        ))}
      </div>
      <div className="py-4 ">
        <button className="btn-blue float-right">
          {Object.values(squares).filter((item) => item).length > 0
            ? "Verify"
            : "Skip"}
        </button>
      </div>
    </div>
  );
};

export default AreYouRobot;
