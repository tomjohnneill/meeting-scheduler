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

export default function Home() {
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
        return (
          <iframe
            src="https://notfunatparties.substack.com/embed"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "white" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        );
    }
  };

  const renderText = () => {
    switch (game) {
      case 1:
        return "Hi Karen, can you meet next Tuesday at 4?";
      case 2:
        return "That's annoying, how about Wednesday at 3?";
      case 3:
        return "Really? It would be good to get something in the diary soon. How about Thursday at 11?";
      case 4:
        return "You're being a bit difficult now. How about Friday at 9:30?";
      case 5:
        return "Now you're just taking the piss. What about Monday at 12:30?";
      case 6:
        return "What about Tuesday at 2? Or do you have someone more important to meet?";
      case 7:
        return "You can't really be that busy. Maybe Wednesday at 11am?";
      case 8:
        return "Surely at this point it's just easier to say yes? Wednesday at 4?";
      case 9:
        return "Come on now, don't be a dick, let's do Thursday at 11:30?";
      case 10:
        return "This is pissing me off now. Friday at 4?";

      default:
        return "OK fine. Maybe this could have been an email.";
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
    <div>
      <Head>
        <title>I'm Booking You</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen">
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://notfunatparties.substack.com?utm_source=meeting-scheduler&utm_medium=software&utm_campaign=meeting-scheduler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F73dcc820-91b0-4c39-9a88-a99e897b155b_120x120.png"
            alt="Vercel Logo"
            className={styles.logo}
          />
          <span className="ml-2">Made by Not Fun at Parties</span>
        </a>
      </footer>
    </div>
  );
}
