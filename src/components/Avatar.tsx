import Image from "next/image"
import AvatarImg from "/public/myFace.webp"
import {AvatarWrapperStyle, NameStyle, imgStyle } from "../styles/heroStyle.css";
import { styled } from "../../stitches.config";

const NamedHeader = () => {
  return (
    <AvatarWrapperStyle>
        <Image
          src={AvatarImg}
          alt="Hello, it's my face"
          title="Hey there !"
          width={58}
          height={58}
          objectFit="cover"
          style={imgStyle}
        />
      <NameStyle>Wardi Kamal</NameStyle>
    </AvatarWrapperStyle>
  )
}

export default NamedHeader
