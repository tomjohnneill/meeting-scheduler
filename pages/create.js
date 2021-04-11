import React, { useState } from "react";
import TimePicker from "../components/TimePicker";

function MyApp() {
  const [value, onChange] = useState(new Date());

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <p>From</p>
        <TimePicker
          step={15}
          placeholder="Start"
          onChange={(value) => setStart(value)}
          className="mr-2"
        />
      </div>
      <div>
        <p>To</p>
        <TimePicker
          step={30}
          placeholder="End"
          onChange={(value) => setEnd(value)}
          from={start}
        />
      </div>
    </div>
  );
}

export default MyApp;
