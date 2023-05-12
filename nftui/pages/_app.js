import "../styles/globals.css";

import { Navbar } from "../Components/componentindex";
import { Footer } from "../Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
