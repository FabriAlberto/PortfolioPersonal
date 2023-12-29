import React from "react";
import Head from "next/head";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scae=1.0" />
        <meta name="description" content="Este es mi portafolio personal!" />
        <title>FabriDev</title>
      </Head>

      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
      </header>

      <main
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
