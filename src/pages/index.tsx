import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';

import { theme1, theme2, theme3, theme4, theme5 } from '../../stitches.config';
import { Pagewrapper } from '@/styles/indexStyle.css';
import {
  Mainwrapper,
  SliderWrapper,
  ProjectWrapper,
  AboutSectionStyled,
} from '@/styles/mainStyle.css';

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Pagewrapper className={theme5}>
      <Hero />
      <Mainwrapper>
        <p>Hello</p>
        <SliderWrapper>
          {/* <ProjectWrapper></ProjectWrapper> */}
          <Slider />
        </SliderWrapper>
        <AboutSectionStyled></AboutSectionStyled>
      </Mainwrapper>
      <Footer />
    </Pagewrapper>
  );
};
export default Home;
