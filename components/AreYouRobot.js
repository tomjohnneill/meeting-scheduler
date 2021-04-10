import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Captcha = ({ handleClick }) => {
  const [squares, setSquares] = useState(
    [...Array(16).keys()].reduce((obj, index) => {
      obj[index] = false;
      return obj;
    }, {})
  );

  const handleSelect = (index) => {
    setSquares({ ...squares, [index]: !squares[index] });
  };

  const handleVerify = () => {
    handleClick("No");
  };

  return (
    <div className="relative p-2 border-gray-200 border bg-white">
      <div className="bg-blue-600 opacity-80 text-white p-4">
        <p>Select all squares with</p>
        <p className="text-2xl font-extrabold">Planet Earth</p>
        <p>If there are none, click skip.</p>
      </div>
      <div className="grid-cols-4 grid w-64">
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
        <button className="btn-blue float-right" onClick={handleVerify}>
          {Object.values(squares).filter((item) => item).length > 0
            ? "Verify"
            : "Skip"}
        </button>
      </div>
    </div>
  );
};

const AreYouRobot = ({ handleClick }) => {
  const [showJoke, setShowJoke] = useState(false);

  return (
    <div className="relative px-16">
      <div className="flex">
        {showJoke ? (
          <Captcha handleClick={handleClick} />
        ) : (
          <button
            onClick={() => setShowJoke(true)}
            className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
          >
            No
          </button>
        )}
        <div className="block">
          <button className="px-2 py-1 rounded bg-red-500 opacity-80 text-white ml-8">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreYouRobot;
