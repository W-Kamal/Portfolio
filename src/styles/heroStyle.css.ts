import { styled } from "../../stitches.config";

export const HeroStyled = styled("div",{
  display:'flex',
  flexDirection:'column',
  marginY:3
});
export const NavStyled = styled("nav",{
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
});
export const AvatarWrapperStyled = styled("div",{
  display:'flex',
  flexDirection:'row',
  gap:"1rem",
  alignItems:"center"
});
export const NameStyled = styled("span",{
  fontSize:"$5"
});
export const HeaderStyled = styled("div",{});
export const StyledHeadline = styled("h1",{});
export const StyledHeadSubtitle = styled("p",{});
export const SocialWrapperStyled = styled("div",{
  display:"flex",
  width:"7rem",
  height:"2rem",
  justifyContent:"space-evenly",
  alignItems:"center",
  // marginInline: 1.5
});
export const IconStyled = styled("a",{
  cursor:"pointer",
  color:"$secondary",
  rel:"noopener noreferrer",
  fontSize:"$7"
});