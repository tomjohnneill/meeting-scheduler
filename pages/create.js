import React, { useState } from "react";

import Header from "../components/Header";
import { FaCross, FaTrash, FaWindowClose } from "react-icons/fa";
import EventTime from "../components/EventTime";

function MyApp() {
  const [options, setOptions] = useState([{ id: Math.random() }]);

  const handleRemove = (id) => {
    setOptions(options.filter((item) => item.id !== id));
  };

  const handleUpdateOption = (value, i) => {
    const upTo = options.slice(0, i);
    const after = options.slice(i + 1, options.length);
    const update = { ...options[i], ...value };
    console.log([...upTo, update, ...after]);
    setOptions([...upTo, update, ...after]);
  };

  console.log({ options });

  const [defaultLength, setDefaultLength] = useState(60);

  const [name, setName] = useState("");

  const handleSave = () => {
    // Save to DB
    const data = {
      name,
      options,
    };
    console.log({ data });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 w-full p-8 pb-32">
        <form className="mx-auto max-w-xl w-full bg-white border border-gray-100 shadow-lg rounded-lg">
          <div className="pb-4 mb-4 border-b border-gray-200">
            <h1 className="font-bold text-3xl py-4 px-4 bg-red-600 opacity-80 border-b text-white rounded-t-lg">
              Create your own
            </h1>
            <div className="px-4 mt-4">
              <label for="name" className="w-full mt-4 font-bold text-xl">
                Who are you sending this to?
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="flex mt-2 w-48 justify-center ounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                placeholder="Name"
                name="name"
              />
            </div>
          </div>

          <h2 className="font-bold text-xl px-4">
            Add suggested dates{" "}
            <span className="font-light">(the more the merrier)</span>
          </h2>
          {options.map((option, i) => (
            <div
              key={option.id}
              id={option.id}
              className="w-full flex items-center justify-start border-gray-200 mt-4 px-4 relative"
            >
              <div className="font-bold text-xl  bg-gray-100 rounded-full mr-4 h-8 w-8 inline-flex items-center justify-center">
                {i + 1}
              </div>
              <EventTime
                option={option}
                defaultLength={defaultLength}
                onChange={(value) => handleUpdateOption(value, i)}
              />
              {i !== 0 && (
                <div className="h-full ml-4 flex items-center">
                  <button
                    className=" rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove(option.id);
                    }}
                  >
                    <FaTrash className="text-gray-600 text-2xl mt-6" />
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center py-4">
            <button
              className="no-button"
              onClick={(e) => {
                e.preventDefault();
                setOptions([...options, { id: Math.random() }]);
              }}
            >
              Add 1 more
            </button>
          </div>
          <div className="w-full flex justify-center items-center p-4 border-t border-gray-200">
            <input
              type="submit"
              className="yes-button w-full text-center cursor-pointer"
              value="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default MyApp;
