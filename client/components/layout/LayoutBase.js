import React from "react";
import Head from "next/head";


export default function LayoutBase(props) {
  return (
    <div>
      <Head>
        <title>Node send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{props.children}</div>
    </div>
  );
}
