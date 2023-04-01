// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { AxGPTTheme } from "@/styles/AxGPTTheme";
import baseTheme from "../styles/baseTheme";
import Header from "../commons/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AxGPTTheme theme={baseTheme}>
      <Header />
      <Component {...pageProps} />
    </AxGPTTheme>
  );
}
