import { useEffect, useState } from "react";

const Door = (props) => {
  const { selected, setSelected, index, openDoor } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (openDoor === index) {
      setOpen(true);
    }
  }, [openDoor]);

  return (
    <div>
      <div className="backDoor flex justify-center items-center rounded flex-col">
        <div
          onClick={() => {
            if (selected) {
              setOpen(!open);
            } else {
              setSelected(index);
            }
          }}
          className={
            open
              ? "doorOpen door cursor-pointer rounded"
              : "door cursor-pointer flex items-center justify-center rounded"
          }
        >
          {selected === index && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Selected
            </span>
          )}
        </div>
        {openDoor === index && (
          <p className="text-white text-center opacity-80 px-4 py-2">
            Here's what you could have had behind this door
          </p>
        )}
        {props.children}
      </div>
      <style jsx global>
        {`
          .backDoor {
            background-color: #333;
            position: relative;
            width: 200px;
            height: 300px;
            margin: 0 auto;
            margin-top: 50px;
          }

          .door {
            background-color: brown;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 200px;
            height: 300px;

            transform-origin: left;
            /*Speed of the Door animation*/
            transition: all 0.5s ease-in-out;
          }

          .doorOpen {
            /*prespectiv creates the door open effect*/
            transform: perspective(1200px) translateZ(0px) translateX(0px)
              translateY(0px) rotateY(-105deg);
          }
        `}
      </style>
    </div>
  );
};

export default Door;
