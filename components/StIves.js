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

  return (
    <div className="flex">
      <div className="p-16">
        <p>To decline this invitation, solve this. You have 30 seconds.</p>

        <p className="max-w-xl">
          As I was going to St. Ives, I met a man with seven wives. Every wife
          had seven sacks, every sack had seven cats, every cat had seven
          kittens. Kittens, cats, sacks, wives, how many were going to St. Ives?
        </p>
        <input
          onChange={(e) => setAnswer(e.target.value)}
          type="number"
          className="border border-gray-300 rounded p-1 mr-2"
        />
        <button
          onClick={handleCheck}
          className="px-2 py-1 bg-blue-400 opacity-80 rounded  opacity-80 text-white transition-all"
        >
          OK
        </button>
        {wrong && (
          <p className="text-red-600 font-bold my-2">Try again, motherf*****</p>
        )}
      </div>
      <div className="p-16">
        <p>To accept, click Yes.</p>
        <button className="px-2 py-1 rounded bg-red-500 opacity-80 text-white transition-all">
          Yes
        </button>
      </div>
    </div>
  );
};

export default StIves;
