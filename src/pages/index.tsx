import { useRouter } from "next/router";

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Availability from "@/components/Availability";
import ProjectCarroussel from "@/components/Slider";

import { theme1, theme2, theme3, theme4, theme5 } from "../../stitches.config";
import { Pagewrapper, Mainwrapper, FooterWrapper } from "@/styles/indexStyle.css";



export default function Home({projects}: {projects: any}) {
  return (
    <Pagewrapper className={theme5}>
        <Hero />
      {/* <Cta content="coucou"/> */}     
      <Main />

      <Footer />
    </Pagewrapper>
  )
}
