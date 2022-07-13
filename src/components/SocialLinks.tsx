import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { styled } from "@stitches/react"

const SocialWrapperm = styled("div", {
  backgroundColor:"lime"
})

// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  const projectList: [] = []

  return (
    <SocialWrapperm>
        <a
          href="https://twitter.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        {<FiGithub />}
        <a
          href="https://www.linkedin.com/in/ericschonhofen/"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaLinkedinIn stroke="black" />}
        </a>
        <a
          href="https://github.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FiTwitter />}
        </a>
      </SocialWrapperm>
  )
}

export default SocialLinks
