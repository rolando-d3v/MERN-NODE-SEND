import "../styles/globals.css";
import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Node send 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <Component {...pageProps} />
      </div>

    </>
  );
}

export default MyApp;
