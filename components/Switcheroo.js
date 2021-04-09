const Switcheroo = ({ handleClick }) => {
  return (
    <div className="flex">
      <button className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all">
        Yes
      </button>
      <button
        onClick={() => handleClick("No")}
        className="px-2 py-1 rounded bg-red-500 opacity-80 text-white"
      >
        No
      </button>
    </div>
  );
};

export default Switcheroo;
