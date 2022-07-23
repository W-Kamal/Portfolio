import { styled } from "@stitches/react"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Link from 'next/link'


// comment appliquer un style global aux react-icons

const StyledSocialWrapper = styled("div", {
  display:"flex",
  width:"7rem",
  height:"2rem",
  justifyContent:"space-between",
  alignItems:"center",
  // marginInline: "1.5rem"
})
const StyledIcon = styled("a",{
  cursor:"pointer",
  color:"$secondary",
  rel:"noopener noreferrer",
  fontSize:"1.5rem"
})

// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  return (
    <StyledSocialWrapper>
      <Link href="https://twitter.com/MozaiK_K" passHref>
        <StyledIcon target="_blank">
          {<FaTwitter title="twitter icon" />}
        </StyledIcon>
      </Link>
      <Link href="https://www.linkedin.com/in/kamal-wardi/" passHref>
        <StyledIcon target="_blank">
          {<FaLinkedinIn title="linkedin icon" />}
        </StyledIcon>
      </Link>
      <Link href="https://github.com/WARDI-Kamal" passHref>
      <StyledIcon target="_blank">
        {<FaGithub title="github icon" />}
      </StyledIcon>
      </Link>        
    </StyledSocialWrapper>
  )
}

export default SocialLinks
