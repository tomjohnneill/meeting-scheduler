import { useState } from "react";
import Square from "./MazeSquare";

const SIZE = 30;

const Maze = ({ handleClick }) => {
  const [gameOver, setGameOver] = useState(false);

  const handleLose = () => {
    setGameOver(true);
  };

  return (
    <div className="flex">
      <div onMouseLeave={() => setGameOver(false)}>
        <div className="flex 1st">
          <Square top left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
          <Square top size={SIZE} onLose={handleLose} />
          <Square top size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top right size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 2nd">
          <Square left size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square top right size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 3rd">
          <Square left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square right bottom size={SIZE} onLose={handleLose} />
          <Square top size={SIZE} onLose={handleLose} />
          <Square top left size={SIZE} onLose={handleLose} />
          <Square top size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 4th">
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square right bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 5th">
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <div
            onClick={() => {
              if (!gameOver) {
                handleClick("No");
              }
            }}
            style={{ width: SIZE * 2, height: SIZE }}
            className={`${
              gameOver
                ? "text-red-600 font-bold opacity-90 text-sm leading-none"
                : "opacity-80 text-gray-600 hover:bg-gray-50 cursor-pointer"
            } transition-all text-center`}
          >
            {gameOver ? "TRY AGAIN" : "No"}
          </div>
          <Square top left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>

        <div className="flex 6th">
          <Square left size={SIZE} onLose={handleLose} />
          <Square left bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square top size={SIZE} onLose={handleLose} />
          <Square top left bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square left size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 7th">
          <Square left bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square right size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 8th">
          <Square left size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square right bottom size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square size={SIZE} onLose={handleLose} />
          <Square left bottom size={SIZE} onLose={handleLose} />
          <Square top bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square right left size={SIZE} onLose={handleLose} />
        </div>
        <div className="flex 9th">
          <Square left bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square left bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square bottom size={SIZE} onLose={handleLose} />
          <Square right bottom size={SIZE} onLose={handleLose} />
        </div>
      </div>
      <div className="block ml-4">
        <button className="yes-button" onClick={() => handleClick("Yes")}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Maze;
