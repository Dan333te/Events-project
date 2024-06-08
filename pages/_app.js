import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
<NavBar/>
      <Component {...pageProps} />
    </>
  );
}
