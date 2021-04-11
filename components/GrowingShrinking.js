import { useState } from "react";

const GrowingShrinking = ({ handleClick }) => {
  const [grow, setGrow] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-16" onMouseOver={() => setGrow(true)}>
        <button
          onClick={() => handleClick("No")}
          className="no-button delay-500"
          style={{ transform: grow ? "scale(0.4)" : "none" }}
        >
          No
        </button>
      </div>
      <div className="p-16">
        <button
          onClick={() => handleClick("Yes")}
          style={{ transform: grow ? "scale(2.5)" : "none" }}
          className="yes-button delay-500"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default GrowingShrinking;
