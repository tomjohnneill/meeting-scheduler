import { useState, useEffect } from "react";

const ButtonOverload = ({ handleClick }) => {
  const [extras, setExtras] = useState([]);

  const handleFirstClick = () => {
    const buttons = [];
    for (let i = 0; i < 20; i += 1) {
      buttons.push({
        key: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }
    setExtras(buttons);
  };

  const handleExtraClick = (key) => {
    if (key !== 7) {
      setExtras(
        extras
          .filter((item) => item.key !== key)
          .map((item) => ({
            key: item.key,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }))
      );
    } else {
      handleClick("No");
    }
  };

  return (
    <>
      {extras.map((item) => (
        <button
          key={item.key}
          style={{ top: item.y, left: item.x }}
          className="absolute px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
          onClick={() => handleExtraClick(item.key)}
        >
          No
        </button>
      ))}

      <div className="flex">
        {extras.length === 0 && (
          <button
            onClick={handleFirstClick}
            className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
          >
            No
          </button>
        )}

        <button className="px-2 py-1 rounded bg-red-500 opacity-80 text-white">
          Yes
        </button>
      </div>
    </>
  );
};

export default ButtonOverload;
