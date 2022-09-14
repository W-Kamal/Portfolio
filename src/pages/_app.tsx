import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '../../stitches.config';

// Applying a piece of reset on css style
globalStyles();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WARDI Kamal</title>
        <meta name='description' content='wardi Kamal portfolio' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Log some stats
export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric);
}

export default MyApp;
