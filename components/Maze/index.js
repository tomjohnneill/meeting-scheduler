import { useState } from "react";
import Square from "./MazeSquare";

const SIZE = 30;

const Maze = () => {
  const [gameOver, setGameOver] = useState(false);

  const handleLose = () => {
    setGameOver(true);
  };

  return (
    <div>
      <div className="flex">
        <Square top left size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex">
        <Square left size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square top right size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex">
        <Square right left size={SIZE} onLose={handleLose} />
        <Square left size={SIZE} onLose={handleLose} />
        <Square right bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex">
        <Square right left size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex">
        <Square right left size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <button
          onClick={() => {
            if (!gameOver) {
              handleClick("No");
            }
          }}
          style={{ width: SIZE * 2, height: SIZE }}
          className={`${
            gameOver
              ? "text-red-600 font-bold opacity-90 text-sm leading-none"
              : "opacity-80 text-gray-600"
          } transition-all`}
        >
          {gameOver ? "TRY AGAIN" : "No"}
        </button>
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
      </div>

      <div className="flex 6th">
        <Square right left size={SIZE} onLose={handleLose} />
        <Square left bottom size={SIZE} onLose={handleLose} />
        <Square top bottom size={SIZE} onLose={handleLose} />
        <Square top bottom size={SIZE} onLose={handleLose} />
        <Square top right size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex 7th">
        <Square left bottom size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square right size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square right left bottom size={SIZE} onLose={handleLose} />
        <Square right left bottom size={SIZE} onLose={handleLose} />
        <Square right left bottom size={SIZE} onLose={handleLose} />
        <Square right left size={SIZE} onLose={handleLose} />
      </div>
      <div className="flex 8th">
        <Square left size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square bottom size={SIZE} onLose={handleLose} />
        <Square right bottom size={SIZE} onLose={handleLose} />
        <Square top left size={SIZE} onLose={handleLose} />
        <Square top right size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
        <Square top right left bottom size={SIZE} onLose={handleLose} />
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
  );
};

export default Maze;
