const Square = (props) => {
  const { top, left, right, bottom, onLose, size } = props;

  const handleMouseEnter = (position) => {
    if (props[position]) {
      onLose();
    }
  };

  return (
    <div className="relative" style={{ height: size, width: size }}>
      {/* Border to top */}
      <div
        className={`absolute top-0 w-full left-0 ${
          top ? "bg-black" : "inherit"
        }`}
        onMouseEnter={() => handleMouseEnter("top")}
        style={{ height: 2 }}
      />
      <div
        className={`absolute bottom-0 w-full left-0 ${
          bottom ? "bg-black" : "inherit"
        }`}
        onMouseEnter={() => handleMouseEnter("bottom")}
        style={{ height: 2 }}
      />
      <div
        className={`absolute top-0 h-full left-0 ${
          left ? "bg-black" : "inherit"
        }`}
        onMouseEnter={() => handleMouseEnter("left")}
        style={{ width: 2 }}
      />
      <div
        className={`absolute top-0 h-full right-0 ${
          right ? "bg-black" : "inherit"
        }`}
        onMouseEnter={() => handleMouseEnter("right")}
        style={{ width: 2 }}
      />
      <div
        className="absolute"
        style={{ top: 2, left: 2, height: size - 4, width: size - 4 }}
      />
    </div>
  );
};

export default Square;
