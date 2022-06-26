import NamedHeader from "./NamedHeader"
import TitleHeader from "./TitleHeader"
import SocialLinks from "./SocialLinks"


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