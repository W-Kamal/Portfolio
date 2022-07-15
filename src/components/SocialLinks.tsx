import { styled } from "@stitches/react"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Link from 'next/link'
// comment appliquer un style global aux react-icons

const SocialWrapper = styled("div", {
  display:"flex",
  backgroundColor:"lightgrey",
  width:"7rem",
  height:"2rem",
  justifyContent:"space-between",
  alignItems:"center",
  marginInline: "1.5rem"
})
const SocialIcon = styled("a",{
  cursor:"pointer",
  rel:"noopener noreferrer",
  fontSize:"1.5rem"
})

// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  return (
    <SocialWrapper>
      <Link href="https://twitter.com/MozaiK_K" passHref>
        <SocialIcon target="_blank">
          {<FaTwitter color="black" title="twitter icon" />}
        </SocialIcon>
      </Link>
      <Link href="https://www.linkedin.com/in/kamal-wardi/" passHref>
        <SocialIcon target="_blank">
          {<FaLinkedinIn color="black" title="linkedin icon" />}
        </SocialIcon>
      </Link>
      <Link href="https://github.com/WARDI-Kamal" passHref>
      <SocialIcon target="_blank">
        {<FaGithub color="black" title="github icon" />}
      </SocialIcon>
      </Link>        
    </SocialWrapper>
  )
}

export default SocialLinks
