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
import PopupAds from '../components/PopupAds';

export default function Home() {
  const [game, setGame] = useState(7);

  const advanceGame = response => {
    if (response === 'No') {
      setGame(game + 1);
    }
  };

  console.log({ game });

  const renderGame = () => {
    switch (game) {
      case 1:
        return <AreYouRobot handleClick={advanceGame} />;
      case 2:
        return <HiddenCursor handleClick={advanceGame} />;
      case 3:
        return <ButtonOverload handleClick={advanceGame} />;
      case 4:
        return <Switcheroo handleClick={advanceGame} />;
      case 5:
        return <PrewrittenTweet handleClick={advanceGame} />;
      case 6:
        return <Maze handleClick={advanceGame} />;
      case 7:
        return <PopupAds handleClick={advanceGame} />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

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
