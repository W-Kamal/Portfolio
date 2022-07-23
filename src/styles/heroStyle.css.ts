import { styled } from "../../stitches.config";

//Custom element's styles will remains here
export const AvatarWrapperStyle = styled("div",{
  display:'flex',
  flexDirection:'row',
  gap:"1rem",
  alignItems:"center"
});
export const NameStyle = styled("span",{
  fontSize:"$5"
});
// This styling is an exception because Next's Image component
// doesn't includes radius built-in rule
export const imgStyle = {
  borderRadius:"99999px",
  overflow:"hidden"
};
