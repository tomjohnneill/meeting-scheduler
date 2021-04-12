import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const defaultSquares = [...Array(16).keys()].reduce((obj, index) => {
  obj[index] = false;
  return obj;
}, {});

const Captcha = ({ handleClick }) => {
  const [squares, setSquares] = useState(defaultSquares);

  const handleSelect = (index) => {
    setSquares({ ...squares, [index]: !squares[index] });
  };

  const sectionNames = ["galaxy", "grasshopper", "haystack"];
  const sectionText = ["Planet Earth", "Grasshoppers"];
  const [error, setError] = useState(null);
  const [section, setSection] = useState(0);

  const handleVerify = () => {
    if (section === 0) {
      setSquares(defaultSquares);
      setSection(1);
    } else {
      if (squares[9] && squares[10] && squares[5] && squares[6]) {
        handleClick("No");
      } else {
        setError("Try again");
      }
    }
  };

  return (
    <div className="relative p-2 border-gray-200 border bg-white">
      <div className="bg-blue-600 opacity-80 text-white p-4">
        <p>Select all squares with</p>
        <p className="text-2xl font-extrabold">{sectionText[section]}</p>
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
            <img
              src={`/${sectionNames[section]}/Slice ${
                i + 1 + 16 * section
              }.png`}
            />
          </div>
        ))}
      </div>
      {error && <span className="text-red-600 font-bold">{error}</span>}
      <div className="py-4 flex justify-end">
        <button
          className="px-3 py-1 text-white rounded opacity-80 bg-blue-600 hover:bg-blue-700 "
          onClick={handleVerify}
        >
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
    <div className="relative px-4 md:px-16">
      <div className="flex">
        <div>
          <button
            onClick={() => setShowJoke(true)}
            className={`no-button ${showJoke && "mb-2 opacity-20"}`}
          >
            No
          </button>
          {showJoke && <Captcha handleClick={handleClick} />}
        </div>

        <div className="block">
          <button
            onClick={() => handleClick("Yes")}
            className="yes-button ml-8"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreYouRobot;
