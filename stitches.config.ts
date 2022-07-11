// from blog post of "using-nextjs-with-stitches
import { createStitches, createTheme } from "@stitches/react";

export const {styled, getCssText } = createStitches({
  theme:{
    fonts:{
      system:'system-ui'
    },
    colors:{
      hiContrast:'hsl(206,10%,5%)',
      loContrast:'white',
      violet800: 'hsl(252 62% 54.9%)',
    },
    fontSizes:{
      1:'16px',
      2:'18px',
      3:'48px'
    }
  }
})

const theme1 = createTheme({
  colors: {
    primary: 'white',
  },
});

const theme2 = createTheme({
  colors: {
    primary: 'white',
  },
});

const Button = styled('button', {
  backgroundColor: '$violet800',
});

