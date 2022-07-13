import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from "src/components/Button"
import Hero from "components/Hero/Hero"
import Availability from "src/components/Availability"
import ProjectCarroussel from "src/features/slider/ProjectSlider"
import { getCssText, styled } from '../../stitches.config';

const HeaderWrapper = styled("header",{
  display:'flex',
  flexDirection:'column',
  color:'red'
})


export default function Home({projects}: {projects: any}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.svg" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <main className={styles.main}>
        {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
      <div className="page-wrapper">
        <HeaderWrapper>
          <Hero />
          <Button />
          <Availability />
        </HeaderWrapper>
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
