import Head from 'next/head'

import Cta from "../components/Cta"
import Hero from "../features/Hero"
import Availability from "../components/Availability"
import ProjectCarroussel from "../features/ProjectSlider"
import { styled, theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config'


// Styling
const Pagewrapper = styled('div', {
  color:'$primary',
  backgroundColor:'$background',
  padding:"2rem"
})
const HeroWrapper = styled("header",{
  display:'flex',
  flexDirection:'column',
})
const Mainwrapper = styled('div', {
  height:"15rem"
})
const FooterWrapper = styled("footer",{
  display:'flex',
  flexDirection:'row'
})

export default function Home({projects}: {projects: any}) {
  return (
    <>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Pagewrapper className={theme3}>      
        <HeroWrapper>
          <Hero />
          {/* <Cta /> */}
          <Availability />
        </HeroWrapper>

        <Mainwrapper>
          <section id="showcase">
            <ProjectCarroussel />
          </section>
          <section id="about"></section>
        </Mainwrapper>

        <FooterWrapper>
          <Availability />
          <Cta />
        </FooterWrapper>
      </Pagewrapper>
    </>
  )
}
