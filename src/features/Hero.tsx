import Avatar from "../components/Avatar"
import TitleHeader from "../components/TitleHeader"
import SocialLinks from "../components/SocialLinks"
import { styled } from "@stitches/react"

const StyledNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
})
const ComposedHeader = () => {
  return (
    <>
    <StyledNav>
      <Avatar/>
      <SocialLinks/>
    </StyledNav>
      <TitleHeader/>
    </>
  )
}

export default ComposedHeader