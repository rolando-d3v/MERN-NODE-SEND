import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function LayoutBase(props) {
  return (
    <div>
      <Head>
        <title>Node send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Header />
          <main className="mt-20">{props.children}</main>
        </div>
      </div>
      
    </div>
  );
}
