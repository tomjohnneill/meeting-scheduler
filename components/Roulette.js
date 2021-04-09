import { useState } from "react";

const Roulette = ({ handleClick }) => {
  const [spin, setSpin] = useState(0);

  const valueDiffed = spin % 90;

  const chosenAnswer = valueDiffed > 75 ? "No" : "Yes";

  return (
    <div>
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
      <button
        className="btn-blue"
        onClick={() => setSpin(spin + Math.random() * 10000)}
      >
        Spin
      </button>
      {spin > 0 && (
        <button onClick={() => handleClick(chosenAnswer)}>
          {chosenAnswer}
        </button>
      )}
    </div>
  );
};

export default Roulette;
