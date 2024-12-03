import "../styles/global.css";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Panzer Coin</title>
        <meta name="Panzer Coin" content="A Panzer of Wisdom." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}
