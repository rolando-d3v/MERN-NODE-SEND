import AuthState from "../Context/auth/authStates";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Node send 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthState>
        <div>
          <Component {...pageProps} />
        </div>
      </AuthState>
    </>
  );
}

export default MyApp;
