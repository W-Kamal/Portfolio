import Avatar from "../components/Avatar"
import TitleHeader from "../components/TitleHeader"
import SocialLinks from "../components/SocialLinks"
import { styled } from "@stitches/react"

const HeadNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
})
const ComposedHeader = () => {
  return (
    <>
    <HeadNav>
      <Avatar/>
      <SocialLinks/>
    </HeadNav>
      <TitleHeader/>
    </>
  )
}

export default ComposedHeader