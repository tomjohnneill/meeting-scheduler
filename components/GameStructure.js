import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import ButtonDodge from "../components/ButtonDodge";
import HiddenCursor from "../components/HiddenCursor";
import PrewrittenTweet from "../components/PrewrittenTweet";
import ButtonOverload from "../components/ButtonOverload";
import Maze from "../components/Maze";
import GrowingShrinking from "../components/GrowingShrinking";
import StIves from "../components/StIves";
import AreYouRobot from "../components/AreYouRobot";
import PowerBar from "../components/PowerBar";
import Roulette from "../components/Roulette";
import Accept from "../components/Accept";
import Dark from "../components/dark";
import { FaRegCalendarAlt } from "react-icons/fa";
import Header from "../components/Header";
import dayjs from "dayjs";

export default function GameStructure({ invitation }) {
  const [game, setGame] = useState(1);
  const [accept, setAccept] = useState(false);

  const advanceGame = (response) => {
    if (response === "No") {
      setGame(game + 1);
    } else {
      setAccept(true);
    }
  };

  // To do: replace St Ives with Dark
  // Add ads

  const renderGame = () => {
    const defaultGame = (
      <iframe
        src="https://notfunatparties.substack.com/embed"
        width="480"
        height="320"
        style={{ border: "1px solid #EEE", background: "white" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    );
    if (invitation?.options.length < game) {
      return defaultGame;
    }
    switch (game) {
      case 1:
        return <ButtonDodge handleClick={advanceGame} />;
      case 2:
        return <GrowingShrinking handleClick={advanceGame} />;
      case 3:
        return <AreYouRobot handleClick={advanceGame} />;
      case 4:
        return <HiddenCursor handleClick={advanceGame} />;
      case 5:
        return <ButtonOverload handleClick={advanceGame} />;
      case 6:
        return null;
      case 7:
        return <PrewrittenTweet handleClick={advanceGame} />;
      case 8:
        return <Maze handleClick={advanceGame} />;
      case 9:
        return <PowerBar handleClick={advanceGame} />;
      case 10:
        return <StIves handleClick={advanceGame} />;
      default:
        return defaultGame;
    }
  };

  const humanize = (date) => {
    return `${dayjs(date).format("dddd")} at ${dayjs(date).format("h")}?`;
  };

  const { options } = invitation || { options: [] };

  const dummyTimes = [
    "next Tuesday at 4?",
    "Wednesday at 3?",
    "Thursday at 11?",
    "Friday at 9:30?",
    "Monday at 12:30",
    "Tuesday at 2",
    "Wednesday at 11am?",
    "Wednesday at 4?",
    "Thursday at 11:30",
    "Friday at 4?",
  ];

  const preludes = (timeString, index) => {
    const list = [
      `That's annoying, how about ${timeString}`,
      `Really? It would be good to get something in the diary soon. How about ${timeString}`,
      `You're being a bit difficult now. How about ${timeString}`,
      `Now you're just taking the piss. What about ${timeString}`,
      `What about ${timeString}? Or do you have someone more important to meet?`,
      `You can't really be that busy. Maybe ${timeString}`,
      `Surely at this point it's just easier to say yes? ${timeString}`,
      `Come on now, don't be a dick, let's do ${timeString}`,
      `This is pissing me off now. ${timeString}`,
    ];
    return list[index];
  };

  const renderText = () => {
    if (invitation?.options.length < game) {
      return "OK fine. Maybe this could have been an email.";
    } else if (game === 1) {
      return `Hi ${invitation?.name || "Karen"}, can you meet ${
        options?.[0]?.start ? humanize(options[0].start) : "next Tuesday at 4?"
      }`;
    } else {
      if (invitation?.options) {
        return preludes(humanize(options[game - 1].start), game - 2);
      } else {
        return preludes(dummyTimes[game - 1], game - 2);
      }
    }
  };

  const acceptText = () => {
    if (game === 1) {
      return "Huh, that was easier than expected.";
    } else if (game < 5) {
      return "That wasn't too hard was it.";
    } else {
      return "Playing hard to get I see. Glad we got there in the end.";
    }
  };

  return (
    <>
      {game === 6 && !accept ? (
        <Dark handleClick={advanceGame} text={renderText()} />
      ) : (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
          <Header />
          <div className="mt-16 max-w-2xl shadow-lg border border-gray-100 rounded-lg bg-white w-full m-auto p-4 flex flex-col items-center pb-8">
            {accept ? (
              <Accept text={acceptText()} />
            ) : (
              <>
                <h1 className="text-2xl font-medium my-6 text-center">
                  {renderText()}
                </h1>

                {renderGame()}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
