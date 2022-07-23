import Cta from "../components/Button"
import Hero from "../features/Hero"
import Availability from "../components/Availability"
import ProjectCarroussel from "../features/ProjectSlider"
import { styled, theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config'
import { useRouter } from 'next/router';

import en from '../locales/en';
import fr from '../locales/fr';

// Styling - Comment styliser la scrollbar ?
const Pagewrapper = styled('div', {
  height:"100vh",
  overflowX:"hidden",
  // overflowY:"scroll",
  // color:'$primary',
  backgroundColor:'$background',
  paddingX:2
})
const HeroWrapper = styled("header",{
  display:'flex',
  flexDirection:'column',
  marginY:3
})
const Mainwrapper = styled('div', {
  height:"15rem"
})
const FooterWrapper = styled("footer",{
  display:'flex',
  flexDirection:'row'
})

export default function Home({projects}: {projects: any}) {
  const router = useRouter();
  const { locale } = router;
  const transl = locale === 'fr' ? fr : en;

  // redirect with router depending on locale choice (i18n)
  const changeLanguage = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    // router.push(router.pathname, router.asPath, { locale locale });
    router.push('/', '/', { locale });
  };
  return (
    <Pagewrapper className={theme5}>      
      <HeroWrapper>
        <Hero />
        {/* <Cta content="coucou"/> */}
        <Availability />
      </HeroWrapper>

      <Mainwrapper>
        <p>{transl.title}</p>
        <section id="showcase">
          <ProjectCarroussel />
        </section>
        <section id="about"></section>
      </Mainwrapper>

      <FooterWrapper>
        <Availability />
        {/* <Cta button={""}/> */}
        <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
      </FooterWrapper>
    </Pagewrapper>
  )
}
