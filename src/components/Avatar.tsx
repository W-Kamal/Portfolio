import Image from "next/image"
import AvatarImg from "/public/myFace.webp"
import { styled } from '../../stitches.config';

const StyledAvatarWrapper = styled("div",{
  display:'flex',
  flexDirection:'row',
  gap:"1rem",
  alignItems:"center"
})
const StyledImgContainer = styled("div",{
  // borderRadius:"99999px",
  borderRadius:"99999px",
  width:"58px",
  height:"58px",
  overflow:"hidden"
})


const NamedHeader = () => {
  return (
    <>
    <StyledAvatarWrapper>
      <StyledImgContainer>
        <Image
          className="profile__img"
          src={AvatarImg}
          alt="Hello, it's me"
          objectFit="fill"
        />
      </StyledImgContainer>
      <span className="profile__name">Wardi Kamal</span>
    </StyledAvatarWrapper>
    </>
  )
}

export default NamedHeader
