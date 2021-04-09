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

export default function Dark() {
  const lookingGlassRef = useRef();
  const mousePosition = useMousePosition();

  return (
    <div className="h-screen w-screen relative bg-yellow-100">
      <h1 className="text-white absolute top-0 w-full text-center z-50">
        FIND THE BUTTON
      </h1>
      <button
        onClick={() => {
          console.log("clicked");
        }}
        className="w-auto p-2 rounded-lg bg-blue-500 text-white absolute bottom-36 right-48 text-sm"
      >
        Congrats you found me!
      </button>
      <div className="overlay absolute h-screen w-screen absolute top-0">
        <div
          ref={lookingGlassRef}
          className="looking-glass absolute rounded-full w-10 h-10 bg-white bottom-24 right-36"
          style={{
            top: `calc(${mousePosition.y}px - 1.25rem)`,
            left: `calc(${mousePosition.x}px - 1.25rem)`,
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
