import Head from "next/head";
import Layout from "../src/components/Layout/Layout.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dean's Pokédex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout />
      </main>
    </div>
  );
}