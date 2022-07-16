import Head from 'next/head'
import Cta from "../components/Cta"
import Hero from "../features/Hero"
import Availability from "../components/Availability"
import ProjectCarroussel from "../features/ProjectSlider"
import { globalCss, styled } from '../../stitches.config'

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box'
  },
  'body': {
    margin: 0,
    padding: 0
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none'
  }
});

const Pagewrapper = styled('div', {})

const HeroWrapper = styled("header",{
  display:'flex',
  flexDirection:'column',
  color:'red'
})
const Mainwrapper = styled('div', {})

const FooterWrapper = styled("footer",{
  display:'flex',
  flexDirection:'row',
  color:'purple'
})


export default function Home({projects}: {projects: any}) {
  globalStyles()
  return (
    <>
      <Head>
        <title>WARDI Kamal</title>
        <meta name="description" content="wardi Kamal portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Pagewrapper>      
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
