import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Tip Tap Collaborative Editor — Order &amp; Chaos</title>
      <meta
          name="description"
          content="Demo of Tip Tap collaborative editor with YJS"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#39393D"/>
      <meta name="msapplication-TileColor" content="#39393d"/>
      <meta name="theme-color" content="#39393d"/>
    </Head>
    <Component {...pageProps} />
    </>
}
