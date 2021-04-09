import { useEffect, useState } from "react";
import Door from "./Door";

const MontyHall = ({ handleClick }) => {
  const [selected, setSelected] = useState(null);

  const [doors, setDoors] = useState([]);

  useEffect(() => {
    setDoors([
      {
        index: 0,
        button: "No",
      },
      {
        index: 1,
        button: "Yes",
      },
      {
        index: 2,
        button: "Yes",
      },
    ]);
  }, []);

  const [openDoor, setOpenDoor] = useState(false);

  useEffect(() => {
    if (selected !== null) {
      setTimeout(() => {
        const yesDoor = doors.filter(
          (door) => door.button === "Yes" && door.index !== selected
        )[0];
        console.log({ yesDoor });
        console.log(yesDoor.index);
        setOpenDoor(yesDoor.index);
      }, 2000);
    }
  }, [selected]);

  return (
    <div>
      Pick a door
      <div className="grid grid-cols-3 gap-8">
        {doors.map((door) => (
          <Door
            key={door.index}
            openDoor={openDoor}
            selected={selected}
            setSelected={setSelected}
            index={door.index}
          >
            <button
              className="btn-blue"
              onClick={() => handleClick(door.button)}
            >
              {door.button}
            </button>
          </Door>
        ))}
      </div>
    </div>
  );
};

export default MontyHall;
