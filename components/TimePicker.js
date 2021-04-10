import dayjs from "dayjs";
import { useEffect, useRef, createRef, useState } from "react";

const times = [];
for (let i = 0; i < 96; i += 1) {
  times.push(
    dayjs()
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .add(15 * i, "minutes")
  );
}

const getMatchingTime = () => {
  const now = dayjs();
  for (let i = 0; i < 96; i += 1) {
    if (now < times[i]) {
      return i;
    }
  }
  return 96;
};

const matchTimeString = (typed) => {
  for (let i = 0; i < 96; i += 1) {
    if (times[i].format("HH:mm").slice(0, typed.length) === typed) {
      return i;
    }
  }
  return null;
};

const TimePicker = ({ onChange }) => {
  const dropdownEl = useRef(null);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (dropdownEl.current && selected) {
      const { scrollHeight } = dropdownEl.current;

      dropdownEl.current.scrollTop =
        (((selected - 2) * 1.0) / 96) * scrollHeight;
    }
  }, [selected]);

  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (typed && matchTimeString(typed)) {
      setSelected(matchTimeString(typed));
    }
  }, [typed]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (dropdownEl.current) {
      const matching = getMatchingTime();

      setSelected(matching);
    }
  }, [dropdownOpen, dropdownEl]);

  const inputEl = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setTyped(times[selected + 1].format("HH:mm"));
      setSelected(selected + 1);
    } else if (e.key === "ArrowUp") {
      setTyped(times[selected - 1].format("HH:mm"));
      setSelected(selected - 1);
    } else if (e.key === "Enter") {
      inputEl.current.blur();
      if (onChange) {
        onChange(times[selected]);
      }
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <input
          onBlur={() => {
            if (onChange) {
              onChange(times[selected]);
            }
            setTimeout(() => {
              setDropdownOpen(false);
            }, 200);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setDropdownOpen(true)}
          placeholder="Time"
          ref={inputEl}
          className="inline-flex w-32 justify-center ounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          aria-expanded="true"
          aria-haspopup="true"
        />
      </div>
      {/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
      {dropdownOpen && (
        <div
          ref={dropdownEl}
          className={`max-h-80 transition-all overflow-y-auto origin-top-left absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
            ${dropdownOpen ? "opacity-100" : "opacity-0"}
          `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {times.map((time, i) => (
              <a
                onClick={(e) => {
                  //setSelected(i);
                  console.log({ i });
                  setTyped(times[i].format("HH:mm"));
                }}
                className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 ${
                  selected === i ? "bg-gray-100" : ""
                }`}
                role="menuitem"
              >
                {time.format("HH:mm")}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
