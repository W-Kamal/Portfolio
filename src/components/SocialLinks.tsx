import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { SocialWrapperStyled, IconeStyled } from "../styles/heroStyle.css";

// comment appliquer un style global aux react-icons

// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  return (
    <SocialWrapperStyled>
      <Link href="https://twitter.com/MozaiK_K" passHref>
        <IconeStyled target="_blank">
          {<FaTwitter title="twitter icon" />}
        </IconeStyled>
      </Link>
      <Link href="https://www.linkedin.com/in/kamal-wardi/" passHref>
        <IconeStyled target="_blank">
          {<FaLinkedinIn title="linkedin icon" />}
        </IconeStyled>
      </Link>
      <Link href="https://github.com/WARDI-Kamal" passHref>
      <IconeStyled target="_blank">
        {<FaGithub title="github icon" />}
      </IconeStyled>
      </Link>        
    </SocialWrapperStyled>
  )
};

export default SocialLinks;
