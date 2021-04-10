const text = "Actually yes, the world does revolve around me.";

const PrewrittenTweet = ({ handleClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`}
      >
        <button onClick={() => handleClick("No")} className="no-button">
          No
        </button>
      </a>
      <button
        onClick={() => handleClick("Yes")}
        className="px-2 py-1 rounded bg-red-500 opacity-80 text-white"
      >
        Yes
      </button>
    </div>
  );
};

export default PrewrittenTweet;
