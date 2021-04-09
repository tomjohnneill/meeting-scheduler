import { useEffect, useState } from "react";

const ButtonDodge = ({ handleClick }) => {
  const [dodges, setDodges] = useState(0);

  const moveButton = () => {
    if (dodges === 1) {
      setTranslation("200%, 150%");
    } else if (dodges === 2) {
      setTranslation("-200%, -150%");
    } else if (dodges === 3) {
      setTranslation("100%, -100%");
    } else if (dodges === 4) {
      setTranslation("-100%, 100%");
    } else {
      setTranslation(null);
    }
  };

  useEffect(() => {
    moveButton();
  }, [dodges]);

  const [translation, setTranslation] = useState(null);

  console.log({ dodges });
  console.log({ translation });

  return (
    <div className="flex">
      <button
        onClick={() => handleClick("No")}
        // onMouseEnter={() => setDodges(dodges + 1)}
        className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
        style={{
          transform: translation ? `translate(${translation})` : "none",
        }}
      >
        No
      </button>
      <button className="px-2 py-1 rounded bg-red-500 opacity-80 text-white">
        Yes
      </button>
    </div>
  );
};

export default ButtonDodge;
