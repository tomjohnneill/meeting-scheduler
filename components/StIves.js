import { useState, useEffect } from "react";

const StIves = ({ handleClick }) => {
  const [startTime, setStartTime] = useState(null);

  // TO DO: get a countdown working to show in the top right
  useEffect(() => {
    setStartTime(new Date());
  }, []);

  const [answer, setAnswer] = useState(null);
  const [wrong, setWrong] = useState(false);

  const handleCheck = () => {
    if (answer === "1") {
      handleClick("No");
    } else {
      setWrong(true);
    }
  };

  const [showPuzzle, setShowPuzzle] = useState(false);
  const handleNoClick = () => {
    setShowPuzzle(true);
  };

  return (
    <div className="flex">
      {showPuzzle ? (
        <div className="border border-gray-200 rounded p-4 mr-4">
          <h2 className="font-bold">To confirm "No", please answer:</h2>
          <p className="max-w-lg my-2">
            As I was going to St. Ives, I met a man with seven wives. Every wife
            had seven sacks, every sack had seven cats, every cat had seven
            kittens. Kittens, cats, sacks, wives, how many were going to St.
            Ives?
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheck();
            }}
          >
            <input
              onChange={(e) => setAnswer(e.target.value)}
              type="number"
              name="number"
              key="number"
              className="border border-gray-300 rounded p-1 mr-2"
            />
            <input
              type="submit"
              onClick={handleCheck}
              value="Answer"
              className="px-2 py-1 bg-blue-600 opacity-80 rounded  opacity-80 text-white transition-all"
            />
          </form>
          {wrong && (
            <p className="text-red-600 font-bold my-2">
              Try again, motherf*****
            </p>
          )}
        </div>
      ) : (
        <button onClick={handleNoClick} className="no-button">
          No
        </button>
      )}
      <div className="block">
        <button
          onClick={() => handleClick("Yes")}
          className="px-2 py-1 my-2 rounded bg-red-500 opacity-80 text-white transition-all"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default StIves;
