const HiddenCursor = ({ handleClick }) => {
  return (
    <div className="flex items-center">
      <div className="p-24" style={{ cursor: "none" }}>
        <button
          onClick={() => handleClick("No")}
          style={{ cursor: "none" }}
          className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
        >
          No
        </button>
      </div>
      <div>
        <button className="btn-blue block">Yes</button>
      </div>
    </div>
  );
};

export default HiddenCursor;
