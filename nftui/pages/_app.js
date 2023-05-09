import "../styles/globals.css";

import { Navbar } from "../Components/componentindex";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
