import Head from 'next/head'
import styles from '../styles/Home.module.css'
import supabase from '../utils/supabase.js'

// @refresh reset - à mettre n'importe où ds le fichier pour reset le state du component

export async function getStaticProps() {
  let { data: projects, error } = await supabase
  .from('projects')
  .select('*')
  
  if(error) {
    throw new Error(error.message)
  }
  return {
    props: {
      projects,
    },
  };
}

export default function Index({projects}: {projects: any}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
        console.log(projects)
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
