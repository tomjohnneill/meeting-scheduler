import { useState, useEffect } from "react";

const ButtonOverload = ({ handleClick }) => {
  const [extras, setExtras] = useState([]);

  const handleFirstClick = () => {
    const buttons = [];
    for (let i = 0; i < 50; i += 1) {
      buttons.push({
        key: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }
    setExtras(buttons);
  };

  const handleExtraClick = (key) => {
    if (key % 7 !== 1) {
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
          className="absolute no-button"
          onClick={() => handleExtraClick(item.key)}
        >
          No
        </button>
      ))}

      <div className="grid grid-cols-2 gap-4">
        {extras.length === 0 && (
          <button onClick={handleFirstClick} className="no-button">
            No
          </button>
        )}

        <button onClick={() => handleClick("Yes")} className="yes-button">
          Yes
        </button>
      </div>
    </>
  );
};

export default ButtonOverload;
