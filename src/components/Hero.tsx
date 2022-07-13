import NamedHeader from "./NamedHeader"
import TitleHeader from "./TitleHeader"
import SocialLinks from "./SocialLinks"
import { styled } from "@stitches/react"

const HeadNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  backgroundColor:"lime",
  width:"100%",
  maxWidth:"100vh"
})
const ComposedHeader = () => {
  return (
    <>
    <HeadNav>
      <NamedHeader/>
      <SocialLinks/>
    </HeadNav>
      <TitleHeader/>
    </>
  )
}

export default ComposedHeader