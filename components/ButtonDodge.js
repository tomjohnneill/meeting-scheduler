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
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={(e) => {
          if (dodges < 4) {
            e.preventDefault();
            setDodges(dodges + 1);
          } else {
            handleClick("No");
          }
        }}
        onMouseEnter={() => setDodges(dodges + 1)}
        className="no-button"
        style={{
          transform: translation ? `translate(${translation})` : "none",
        }}
      >
        No
      </button>
      <button onClick={() => handleClick("Yes")} className="yes-button">
        Yes
      </button>
    </div>
  );
};

export default ButtonDodge;
