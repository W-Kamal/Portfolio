import Image from "next/image"
import AvatarImg from "/public/myFace.webp"
import { styled } from '../../../stitches.config';

const AvatarWrapper = styled("div",{
  display:'flex',
  flexDirection:'row',
  gap:"0.5rem"
})
const ImgContainer = styled("div",{
  borderRadius:"50%",
  overflow:"hidden",
  height:"44px",
  width:"44px"
})

const NamedHeader = () => {
  return (
    <AvatarWrapper>
      {/* <div className="imgContainer" style={{borderRadius: '50%', overflow: 'hidden'}}> */}
      <ImgContainer>
        <Image 
            className="profile__img"
            src={AvatarImg} 
            alt="Hello, it's me"
            layout="intrinsic"
            objectFit="cover"
          />
      </ImgContainer>
      {/* </div> */}
      <span className="profile__name">Wardi Kamal</span>
    </AvatarWrapper>
  )
}

export default NamedHeader
