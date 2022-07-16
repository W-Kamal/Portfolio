import Image from "next/image"
import AvatarImg from "/public/myFace.webp"
import { styled } from '../../stitches.config';

const AvatarWrapper = styled("div",{
  display:'flex',
  flexDirection:'row',
  gap:"1rem",
  alignItems:"center"
})
const ImgContainer = styled("div",{
  // borderRadius:"99999px",
  borderRadius:"99999px",
  width:"64px",
  height:"64px"
})


const NamedHeader = () => {
  return (
    <>
    <AvatarWrapper>
      {/* <ImgContainer> */}
        <Image
          className="profile__img"
          src={AvatarImg}
          alt="Hello, it's me"
          objectFit="contain"
          width={48}
          height={48}
        />
      {/* </ImgContainer> */}
      <span className="profile__name">Wardi Kamal</span>
    </AvatarWrapper>
    </>
  )
}

export default NamedHeader
