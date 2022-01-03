import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>This is Footer</footer>
      <style jsx global>{`
        nav {
          background-color: black;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
