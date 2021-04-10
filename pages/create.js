import React, { useState } from "react";
import TimePicker from "../components/TimePicker";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <TimePicker />
    </div>
  );
}

export default MyApp;
