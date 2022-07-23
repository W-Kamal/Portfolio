import Image from "next/image";
import AvatarImg from "/public/myFace.webp";
import SocialLinks from "../components/SocialLinks";
import Availability from "../components/Availability";
import Btn from "../components/Button";
import {
  HeroStyled, 
  NavStyled, 
  AvatarWrapperStyled, 
  NameStyled,
  HeaderStyled,
  StyledHeaderTitle,
  StyledHeaderSubtitle,
  SocialWrapperStyled,
  IconeStyled
} from "../styles/heroStyle.css";

const Hero = () => {
  return (
    <HeroStyled>
      <NavStyled>
        <AvatarWrapperStyled>
          <Image
            src={AvatarImg}
            alt="Hello, it's my face"
            title="Hey there !"
            width={58}
            height={58}
            objectFit="cover"
            style={{
              borderRadius:"99999px",
              overflow:"hidden"
            }}
          />
          <NameStyled>Wardi Kamal</NameStyled>
        </AvatarWrapperStyled>
        <SocialLinks/>
      </NavStyled>

      <HeaderStyled>
        <StyledHeaderTitle>Donner du sens aux projets</StyledHeaderTitle>
        {/* <StyledTitle>Let's give meaning to your projects</StyledTitle> */}
        {/* <StyledSubtitle>I build frontend solution for your projects</StyledSubtitle> */}
        <StyledHeaderSubtitle>
          Je suis sur la voie du développeur Font-end Applicatif, je veux monter en compétences et créer des solutions.
        </StyledHeaderSubtitle>
      </HeaderStyled>

      <Availability />
      {/* <Btn /> */}
    </HeroStyled>
  )
};

export default Hero;