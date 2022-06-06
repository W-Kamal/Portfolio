import Head from 'next/head'
import styles from '../styles/Home.module.css'
import supabase from '../utils/supabase.js'

export async function getStaticProps() {
let { data: projects, error } = await supabase
.from('projects')
.select('*')

console.log('projects', projects)
if(error) {
  throw new Error(error.message)
}

  return {
    props: {
      projects,
    },
  };
}

export default function Home({projects}: {projects: any}) {
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
