const HiddenCursor = ({ handleClick }) => {
  return (
    <div className="flex items-center">
      <div className="py-24 px-8" style={{ cursor: "none" }}>
        <button
          onClick={() => handleClick("No")}
          style={{ cursor: "none" }}
          className="no-button"
        >
          No
        </button>
      </div>
      <div className="py-24 px-8" onClick={() => handleClick("Yes")}>
        <button className="btn-blue block">Yes</button>
      </div>
    </div>
  );
};

export default HiddenCursor;
