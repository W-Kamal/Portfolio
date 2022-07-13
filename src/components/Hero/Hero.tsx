import Avatar from "./Avatar"
import TitleHeader from "../TitleHeader"
import SocialLinks from "../SocialLinks"
import { styled } from "@stitches/react"

const HeadNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  backgroundColor:"lime"
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