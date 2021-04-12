import Head from "next/head";
import GameStructure from "../components/GameStructure";
import styles from "../styles/Home.module.css";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const CustomPage = ({ invitation, error }) => {
  console.log({ invitation });

  console.log({ error });

  return (
    <div>
      <Head>
        <title>I'm Booking You</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tomjneill" />
        <meta name="twitter:creator" content="@tomjneill" />
        <meta name="twitter:title" content="I'm Booking You." />
        <meta
          name="twitter:description"
          content="The best tool for all your passive aggressive meeting scheduling needs."
        />
        <meta
          name="twitter:image"
          content="https://www.imbookingyou.com/social.png"
        />
        <meta
          property="og:image"
          content="https://www.imbookingyou.com/social.png"
        />
        <meta name="twitter:image:alt" content="" />
        <meta
          property="og:description"
          content="The best tool for all your passive aggressive meeting scheduling needs."
        />
        <meta property="og:title" content="I'm Booking You." />
        <meta property="og:url" content={"https://www.imbookingyou.com"} />
      </Head>

      <main className="flex flex-col items-center min-h-screen">
        <GameStructure invitation={invitation} />
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
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const supabase = createClient(
    process.env.SUPABASE_API,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { data, error } = await supabase
    .from("invitations")
    .select(
      `
        id,
        name,
        title,
        email,
        options
      `
    )
    .eq("id", id);

  if (error) {
    return {
      props: { error },
    };
  }

  return {
    props: { invitation: data?.[0] || {} }, // will be passed to the page component as props
  };
}

export default CustomPage;
