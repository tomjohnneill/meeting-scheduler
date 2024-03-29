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
    <div className="relative px-4 md:px-16">
      <div className="flex">
        <div>
          <button
            onClick={handleNoClick}
            className={`no-button ${showPuzzle && "opacity-20"}`}
          >
            No
          </button>
          {showPuzzle && (
            <div className="border border-gray-200 rounded p-4 mr-4 mt-2">
              <h2 className="font-bold">To confirm:</h2>
              <p className="max-w-lg my-2">
                As I was going to St. Ives, I met a man with seven wives. Every
                wife had seven sacks, every sack had seven cats, every cat had
                seven kittens. Kittens, cats, sacks, wives, how many were going
                to St. Ives?
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
                  className="cursor-pointer hover:bg-blue-700 px-2 py-1 bg-blue-600 opacity-80 rounded  opacity-80 text-white transition-all"
                />
              </form>
              {wrong && (
                <p className="text-red-600 font-bold my-2">Try again</p>
              )}
            </div>
          )}
        </div>
        <div className="block">
          <button
            onClick={() => handleClick("Yes")}
            className="yes-button ml-4"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StIves;
