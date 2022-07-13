import { styled } from "@stitches/react"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

// comment appliquer un style global aux react-icons

const SocialWrapperm = styled("div", {
  backgroundColor:"lightgrey",
  width:"3rem"
})

// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  const projectList: [] = []

  return (
    <SocialWrapperm>
        <a
          href="https://twitter.com/MozaiK_K"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaTwitter color="black" title="twitter icon" size="1.5rem" className="social__icon" />}
        </a>
        <a
          href="https://www.linkedin.com/in/kamal-wardi/"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
          >
          {<FaLinkedinIn color="black" title="linkedin icon" size="1.5rem" className="social__icon" />}
        </a>
        <a
          href="https://github.com/WARDI-Kamal"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
          >
          {<FaGithub color="black" title="github icon" size="1.5rem" className="social__icon" />}
        </a>
      </SocialWrapperm>
  )
}

export default SocialLinks
