import GlobalStyle from "@src/theme/GlobalStyle";
import { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
