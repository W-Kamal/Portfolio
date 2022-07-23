import Avatar from "../components/Avatar"
import TitleHeader from "../components/TitleHeader"
import SocialLinks from "../components/SocialLinks"
import { styled } from "@stitches/react"

const StyledHero = styled("div", {
  
})
const StyledNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
})

const ComposedHeader = () => {
  return (
    <StyledHero>
      <StyledNav>
        <Avatar/>
        <SocialLinks/>
      </StyledNav>
      <TitleHeader/>
    </StyledHero>
  )
}

export default ComposedHeader