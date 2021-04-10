import { useRef, useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default function Dark({ handleClick, text }) {
  const lookingGlassRef = useRef();
  const mousePosition = useMousePosition();

  return (
    <div className="h-screen w-full relative bg-yellow-100 text-white">
      <div className="text-white absolute top-0 w-full text-center z-50 flex flex-col items-center">
        <h1 className="text-white text-2xl my-4">{text}</h1>
        <button className="btn-blue mt-16">Yes</button>
      </div>

      <button
        onClick={() => {
          handleClick("No");
        }}
        className="w-auto px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 absolute bottom-36 right-48 bg-white"
      >
        No
      </button>
      <div className="overlay absolute h-screen w-screen absolute top-0 pointer-events-none">
        <div
          ref={lookingGlassRef}
          className="looking-glass absolute rounded-full w-16 h-16 bg-white bottom-24 right-36 pointer-events-none"
          style={{
            top: `calc(${mousePosition.y}px - 2rem)`,
            left: `calc(${mousePosition.x}px - 2rem)`,
          }}
        ></div>
      </div>
      <style jsx>{`
        .overlay {
          mix-blend-mode: multiply;
          height: 100vh;
          width: 100vw;
          background: rgb(0, 0, 0);
        }
        .looking-glass {
          position: absolute;
        }
      `}</style>
    </div>
  );
}
