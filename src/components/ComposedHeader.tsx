import NamedHeader from "./NamedHeader"
import TitleHeader from "./TitleHeader"
import SocialLinks from "./SocialLinks"
import { styled } from "@stitches/react"

const headNav = styled("nav", {
  display:"flex",
  flexDirection:"row",
  flexFlow:"wrap"
})
const ComposedHeader = () => {
  return (
    <>
    <nav>
      <NamedHeader/>
      <SocialLinks/>
    </nav>
      <TitleHeader/>
    </>
  )
}

export default ComposedHeader