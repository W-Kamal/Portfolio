import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export function getStaticProps() {
  return {
    props: {
      name: 'Next.js',
      projects:[],
    },
  }
}

const Home: NextPage = ({projects}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
