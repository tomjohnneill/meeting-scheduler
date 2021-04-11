import { useEffect, useState } from "react";
import TimePicker from "../components/TimePicker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dayjs from "dayjs";

const EventTime = ({ option, defaultLength, onChange }) => {
  const [date, setDate] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    if (start) {
      setEnd(start.add(defaultLength, "minutes"));
    }
  }, [start]);

  if (end) {
    console.log("end in eventtime", end.toDate());
  }

  useEffect(() => {
    if (date) {
      let updateStart = date;
      if (start) {
        updateStart = date.hour(start.hour()).minute(start.minute());
      }
      if (onChange) {
        onChange({ ...option, start: updateStart });
      }
    }
  }, [date, start]);

  useEffect(() => {
    if (date) {
      let updateStart = date;
      if (end) {
        updateStart = date.hour(end.hour()).minute(end.minute());
      }
      if (onChange) {
        onChange({ ...option, end: updateStart });
      }
    }
  }, [date, end]);

  return (
    <>
      <div className="mr-2">
        <p>Date</p>
        <DayPickerInput
          inputProps={{
            className:
              "8inline-flex w-32 justify-center ounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
          }}
          onDayChange={(day) => setDate(dayjs(day))}
        />
      </div>
      <div>
        <p>From</p>
        <TimePicker
          step={15}
          value={start}
          placeholder="Start"
          onChange={(value) => setStart(value)}
          className="mr-2"
        />
      </div>
      <div>
        <p>To</p>
        <TimePicker
          step={30}
          value={end}
          placeholder="End"
          onChange={(value) => setEnd(value)}
          from={start}
        />
      </div>
    </>
  );
};

export default EventTime;
