import Head from 'next/head'
import styles from '../styles/Home.module.css'
import supabase from 'api/supabase.js'
import Button from "src/components/Button"
import ComposedHeader from "src/components/ComposedHeader"
import Availability from "src/components/Availability"
import ProjectCarroussel from "src/components/ProjectCarroussel"

// for SSR of CSS rules
import { getCssText } from '../../stitches.config';

/*
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
*/

export default function Home({projects}: {projects: any}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/a0526e87eb.js" defer />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <main className={styles.main}>
        {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
      <div className="page-wrapper">
      <header className="header__wrapper">
        <ComposedHeader />
        <Button />
        <Availability />
      </header>
      <main>
        <section id="showcase">
          <ProjectCarroussel />
        </section>
        <section id="about"></section>
      </main>
    </div>
      </main>
      <footer>
        <Availability />
        <Button />
      </footer>
    </div>
  )
}
