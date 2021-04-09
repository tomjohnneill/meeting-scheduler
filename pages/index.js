import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import ButtonDodge from "../components/ButtonDodge";
import HiddenCursor from "../components/HiddenCursor";
import PrewrittenTweet from "../components/PrewrittenTweet";
import ButtonOverload from "../components/ButtonOverload";
import Maze from "../components/Maze";
import Switcheroo from "../components/Switcheroo";
import GrowingShrinking from "../components/GrowingShrinking";
import StIves from "../components/StIves";
import AreYouRobot from "../components/AreYouRobot";
import MontyHall from "../components/MontyHall";

export default function Home() {
  const [game, setGame] = useState(1);

  const advanceGame = (response) => {
    if (response === "No") {
      setGame(game + 1);
    }
  };

  const renderGame = () => {
    switch (game) {
      case 1:
        return <ButtonDodge handleClick={advanceGame} />;
      case 2:
        return <GrowingShrinking handleClick={advanceGame} />;
      case 3:
        return <HiddenCursor handleClick={advanceGame} />;
      case 4:
        return <Switcheroo handleClick={advanceGame} />;
      case 5:
        return <ButtonOverload handleClick={advanceGame} />;
      case 6:
        return <PrewrittenTweet handleClick={advanceGame} />;
      case 7:
        return <Maze handleClick={advanceGame} />;
      case 8:
        return <MontyHall handleClick={advanceGame} />;
      case 9:
        return <StIves handleClick={advanceGame} />;
      default:
        return <AreYouRobot />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="https://img.favpng.com/0/9/22/calendar-date-dating-clip-art-png-favpng-ihHy3CafNW2MSiY3hBAPsZ9a3.jpg"
          className="h-48"
        />
        <h1 className="text-4xl my-2">Hi Karen,</h1>
        <h1 className="text-2xl my-4">Can you meet next Tuesday at 4?</h1>

        {renderGame()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
