import NamedHeader from "./NamedHeader"
import TitleHeader from "./TitleHeader"
import SocialLinks from "./SocialLinks"
import { styled } from "@stitches/react"

const HeadNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  width:'100%',
  backgroundColor:"lime"
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