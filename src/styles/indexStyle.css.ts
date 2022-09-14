import { styled } from '../../stitches.config';

// Styling - Comment styliser la scrollbar ?
export const PageWrapper = styled('div', {
  height: '100vh',
  overflowX: 'hidden',
  // overflowY:"scroll",
  // color:'$primary',
  backgroundColor: '$background',
  paddingX: 2,
});
// export const HeroWrapper = styled("header",{
//   display:'flex',
//   flexDirection:'column',
//   marginY:3
// })

export const MainWrapper = styled('div', {
  height: 'max-content',
});
export const AboutWrapper = styled('div', {});