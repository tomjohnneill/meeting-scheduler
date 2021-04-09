import { useState } from "react";

const GrowingShrinking = ({ handleClick }) => {
  const [grow, setGrow] = useState(false);

  return (
    <div className="flex">
      <div className="p-16" onMouseEnter={() => setGrow(true)}>
        <button
          onClick={() => handleClick("No")}
          className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
          style={{ transform: grow ? "scale(0.4)" : "none" }}
        >
          No
        </button>
      </div>
      <div className="p-16">
        <button
          style={{ transform: grow ? "scale(2.5)" : "none" }}
          className="px-2 py-1 rounded bg-red-500 opacity-80 text-white transition-all"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default GrowingShrinking;
