import { styled } from "../../stitches.config";

// Styling - Comment styliser la scrollbar ?
export const Pagewrapper = styled('div',{
  height:"100vh",
  overflowX:"hidden",
  // overflowY:"scroll",
  // color:'$primary',
  backgroundColor:'$background',
  paddingX:2
})
// export const HeroWrapper = styled("header",{
//   display:'flex',
//   flexDirection:'column',
//   marginY:3
// })
export const Mainwrapper = styled('div',{
  height:"15rem"
})
export const FooterWrapper = styled("footer",{
  display:'flex',
  flexDirection:'row'
})