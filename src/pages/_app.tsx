import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from "../styles/globalStyle.css"

// Apply css style
globalStyles();
const MyApp:React.FC<AppProps> = ({ Component, pageProps }) => {
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
export default MyApp;