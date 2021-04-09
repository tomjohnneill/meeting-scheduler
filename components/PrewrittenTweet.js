const text = "Actually yes, the world does revolve around me.";

const PrewrittenTweet = ({ handleClick }) => {
  return (
    <div className="flex">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`}
      >
        <button
          onClick={() => handleClick("No")}
          className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
        >
          No
        </button>
      </a>
      <button className="px-2 py-1 rounded bg-red-500 opacity-80 text-white">
        Yes
      </button>
    </div>
  );
};

export default PrewrittenTweet;
