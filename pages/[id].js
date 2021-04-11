import Head from "next/head";
import GameStructure from "../components/GameStructure";
import styles from "../styles/Home.module.css";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const CustomPage = ({ invitation }) => {
  console.log({ invitation });

  return (
    <div>
      <Head>
        <title>I'm Booking You</title>
        <link rel="icon" href="/favicon.ico" />
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

export async function getStaticPaths() {
  return {
    paths: [],

    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
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
        options
      `
    )
    .eq("id", id);

  if (error) console.log("error", error);

  return {
    revalidate: 120,
    props: { invitation: data?.[0] || {} }, // will be passed to the page component as props
  };
}

export default CustomPage;
