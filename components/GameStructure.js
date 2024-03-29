import Head from "next/head";
import { useEffect, useState } from "react";
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
import PopupAds from "../components/PopupAds";
import Dark from "../components/dark";
import { FaRegCalendarAlt } from "react-icons/fa";
import Header from "../components/Header";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

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

  const games = [
    {
      mobile: true,
      name: "ButtonDodge",
      game: <ButtonDodge handleClick={advanceGame} />,
    },
    {
      mobile: false,
      name: "GrowingShrinking",
      game: <GrowingShrinking handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "AreYouRobot",
      game: <AreYouRobot handleClick={advanceGame} />,
    },
    {
      mobile: false,
      name: "HiddenCursor",
      game: <HiddenCursor handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "Roulette",
      game: <Roulette handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "ButtonOverload",
      game: <ButtonOverload handleClick={advanceGame} />,
    },
    {
      mobile: false,
      name: "Ads",
      game: <PopupAds handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "Dark",
      game: null,
    },
    {
      mobile: true,
      name: "PrewrittenTweet",
      game: <PrewrittenTweet handleClick={advanceGame} />,
    },
    {
      mobile: false,
      name: "Maze",
      game: <Maze handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "PowerBar",
      game: <PowerBar handleClick={advanceGame} />,
    },
    {
      mobile: true,
      name: "StIves",
      game: <StIves handleClick={advanceGame} />,
    },
  ];

  const [gameList, setGameList] = useState([]);

  const defaultGame = (
    <>
      <div className="hidden md:block">
        <iframe
          src="https://notfunatparties.substack.com/embed"
          width="480"
          height="320"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="block md:hidden">
        <iframe
          src="https://notfunatparties.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );

  const renderGame = () => {
    if (invitation?.options.length < game) {
      return defaultGame;
    } else if (game === 1) {
      return games[0].game;
    } else {
      let applicableGames = gameList;

      return applicableGames[game - 1]
        ? applicableGames[game - 1].game
        : defaultGame;
    }
  };

  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (game > 1) {
      let applicableGames = games;
      if (window.innerWidth < 736) {
        applicableGames = games.filter((item) => item.mobile);
      }
      setGameList(applicableGames);
      if (applicableGames[game - 1]?.name === "Dark") {
        setDark(true);
      } else {
        setDark(false);
      }
    }
  }, [game]);

  const humanize = (date) => {
    const hour =
      dayjs(date).minute() !== 0
        ? `${dayjs(date).format("h")}:${dayjs(date).format("mm")}`
        : dayjs(date).format("h");

    return `${dayjs(date).format("dddd")} at ${hour}?`;
  };

  const { options } = invitation || { options: [] };

  const dummyTimes = [
    "next Tuesday at 4?",
    "Wednesday at 3?",
    "Thursday at 11?",
    "Thursday at 3?",
    "Friday at 9:30?",
    "Monday at 12:30?",
    "Tuesday at 2?",
    "Wednesday at 11am?",
    "Wednesday at 4?",
    "Thursday at 15:30?",
    "Friday at 12:30?",
    "Friday at 4?",
  ];

  const preludes = (timeString, index) => {
    const list = [
      `That's annoying, how about ${timeString}`,
      `Really? It would be good to get something in the diary soon. How about ${timeString}`,
      `I know you're really busy, but it would be very helpful. I could do ${timeString}`,
      `I would really appreciate it if you could fit me in. Perhaps ${timeString}`,
      `You're being a bit difficult now. How about ${timeString}`,
      `Now you're just taking the piss. What about ${timeString}`,
      `What about ${timeString}? Or do you have someone more important to meet?`,
      `You can't really be that busy. Maybe ${timeString}`,
      `Surely at this point it's just easier to say yes? ${timeString}`,
      `Come on, don't be a dick, let's do ${timeString}`,
      `This is pissing me off now. ${timeString}`,
    ];
    return list[index];
  };

  const renderText = () => {
    if (
      invitation?.options.length < game ||
      (gameList.length > 1 && gameList.length < game)
    ) {
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

  const defaultEvent = {
    title: "My birthday party",
    description: "Be there!",
    start: "2021-12-25 18:00:00 +0100",
    duration: [3, "hour"],
  };

  const generateEvent = (option) => {
    return {
      title: invitation.title || "Event",
      description: "",
      start: option.start,
      guests: invitation.email ? [invitation.email] : [],
      duration: [dayjs(option.end).diff(dayjs(option.start), "hours"), "hour"],
    };
  };

  console.log({ invitation });

  return (
    <>
      {dark && !accept ? (
        <Dark handleClick={advanceGame} text={renderText()} />
      ) : (
        <>
          <Header />
          <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center px-4">
            <div className="mt-16 max-w-2xl shadow-lg border border-gray-100 rounded-lg bg-white w-full m-auto p-4 flex flex-col items-center pb-8">
              {accept ? (
                <Accept
                  text={acceptText()}
                  event={
                    invitation?.options?.[game - 1]
                      ? generateEvent(invitation?.options?.[game - 1])
                      : defaultEvent
                  }
                />
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
        </>
      )}
    </>
  );
}
