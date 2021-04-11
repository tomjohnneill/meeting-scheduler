import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Roulette = ({ handleClick }) => {
  const [spin, setSpin] = useState(0);

  const valueDiffed = spin % 90;

  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setSpinning(true);
    setTimeout(() => {
      setChosenAnswer(spin % 90 > 75 ? "No" : "Yes");
      setSpinning(false);
    }, 1000);
  }, [spin]);
  //const chosenAnswer = valueDiffed > 75 ? "No" : "Yes";

  return (
    <div className="md:flex relative">
      <button
        className="btn-blue absolute top-0 left-0 z-50"
        onClick={() => setSpin(spin + Math.random() * 10000)}
      >
        Spin
      </button>
      <div className="flex items-center flex-col">
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 19L0.674683 0.25L22.3253 0.249998L11.5 19Z"
            fill="black"
          />
        </svg>

        <img
          src="/spinner.svg"
          className=" transition-all duration-1000"
          style={{ transform: `rotate(${spin}deg)` }}
        />
      </div>
      <div className="mt-4 md:mt-0">
        <p className="py-2 text-xl ml-2">You win the option to say...</p>
        {spin > 0 && chosenAnswer && !spinning && (
          <button
            onClick={() => handleClick(chosenAnswer)}
            className={`${
              spinning ? "No" : chosenAnswer?.toLowerCase()
            }-button float-right`}
          >
            {chosenAnswer}
          </button>
        )}
      </div>
    </div>
  );
};

export default Roulette;
