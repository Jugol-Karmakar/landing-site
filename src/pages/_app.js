import Footer from "@/shared/footer";
import Header from "@/shared/header/header";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import LoginModal from "@/components/login-modal";

const globalStyles = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: content-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline styles={globalStyles} />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <LoginModal />
      </ThemeProvider>
    </>
  );
}
