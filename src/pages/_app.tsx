import type { AppProps } from 'next/app'
import Head from 'next/head'
import "../styles/index.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
