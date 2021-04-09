import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ButtonDodge from '../components/ButtonDodge';
import HiddenCursor from '../components/HiddenCursor';
import PrewrittenTweet from '../components/PrewrittenTweet';
import ButtonOverload from '../components/ButtonOverload';
import Maze from '../components/Maze';
import Switcheroo from '../components/Switcheroo';
import GrowingShrinking from '../components/GrowingShrinking';
import StIves from '../components/StIves';
import AreYouRobot from '../components/AreYouRobot';
import MontyHall from '../components/MontyHall';
import PowerBar from '../components/PowerBar';
import Roulette from '../components/Roulette';
import PopupAds from '../components/PopupAds';

export default function Home() {
  const [game, setGame] = useState(7);

  const advanceGame = response => {
    if (response === 'No') {
      setGame(game + 1);
    }
  };

  // To do: replace St Ives with Dark
  // Add ads

  const renderGame = () => {
    switch (game) {
      case 1:
        return <Roulette handleClick={advanceGame} />;
      case 2:
        return <GrowingShrinking handleClick={advanceGame} />;
      case 3:
        return <HiddenCursor handleClick={advanceGame} />;
      case 4:
        return <ButtonOverload handleClick={advanceGame} />;
      case 5:
        return <PrewrittenTweet handleClick={advanceGame} />;
      case 6:
        return <PopupAds handleClick={advanceGame} />;
      case 7:
        return <Maze handleClick={advanceGame} />;
      case 8:
        return <PowerBar handleClick={advanceGame} />;
      case 9:
        return <StIves handleClick={advanceGame} />;
      default:
        return <AreYouRobot />;
    }
  };

  const renderText = () => {
    switch (game) {
      case 1:
        return 'Hi Karen, can you meet next Tuesday at 4?';
      case 2:
        return "That's annoying, how about Wednesday at 3?";
      case 3:
        return 'Really? It would be good to get something in the diary soon. How about Thursday at 11?';
      case 4:
        return "You're being a bit difficult now. How about Friday at 9:30?";
      case 5:
        return "Now you're just taking the piss. What about Monday at 12:30?";
      case 6:
        return 'What about Tuesday at 2? Or do you have someone more important to meet?';
      case 7:
        return "Surely at this point it's just easier to say yes? Wednesday at 4?";
      case 8:
        return "Come on now, don't be a dick, let's do Thursday at 11:30?";
      case 9:
        return 'This is just pissing me off. Friday at 4?';
      default:
        return "OK fine. I'll send an email instead";
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
        <h1 className="text-2xl my-4">{renderText()}</h1>

        {renderGame()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
