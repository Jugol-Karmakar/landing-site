import Footer from "@/shared/footer";
import Header from "@/shared/header/header";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
