// from blog post of "using-nextjs-with-stitches
import { createStitches } from "@stitches/react";

//On créé un thème de départ (default disons)
//Grâce à la fonction createTheme on déclare les changements désirés
export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      WintergreenDream:'hsla(154, 15%, 49%, 1)', //#6B9080
      cambridgeBlue:'hsla(147,21%,70%,1)', //A4C3B2
      LightCyan:'hsla(167,29%,85%,1)', //#CCE3DE
      AzureX11:'hsla(180, 31%, 94%, 1)', //#EAF4F4
      MintCream2:'hsla(133,100%,98%,1)', //#F6FFF8

      PrussianBlue:'hsla(209,52%,16%,1)', //#13293D
      SaphireBlue:'hsla(199,100%,29%,1)', //#006494
      CGBlue:'hsla(198,63%,38%,1)', //#247BA0
      CarolinaBlue:'hsla(202,78%,49%,1)', //#1B98E0
      AliceBlue:'hsla(186,28%,93%,1)', //#E8F1F2

      PaleSpringBud:'hsla(74,32%,76%,1)', //#CCD5AE
      PaleSpringBud2:'hsla(67,50%,86%,1)', //#E9EDC9
      PapayeWhip:'hsla(43,82%,89%,1)', //#FAEDCD
      Fawn:'hsla(30,53%,64%,1)', //#D4A373
      Cornsilk:'hsla(52,94%,94%,1)', //#FEFAE0

      OuterSpaceCrayola:'hsla(164,9%,23%,1)', //#36413E
      PrincetonOrange:'hsla(24,85%,56%,1)', // #EE7B30
      PersianOrange:'hsla(32,55%,55%,1)', //#CB904D
      DavysGrey:'hsla(220,2%,37%,1)', //#5D5E60

      RussianGreen:'hsla(101,22%,45%,1)', //#688B58
      OxfordBlue:'hsla(213,96%,11%,1)', //#011936
      MintCream: 'hsla(113, 31%, 95%, 1)', //#EFF6EE
      BlackCoral:'hsla(212,17%,33%,1)', //#465362
      BlueMunsell:'hsla(191,64%,40%,1)', //#258EA6
      
      // Aliases ($ to use properties as variables)
      primary: "$WintergreenDream",
      secondary: "$MintCream2",
      background: "$AliceBlue",
      button:"WintergreenDream",
      border: "$AliceBlue",

    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      system: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
  },
  utils: {
    marginX: (value:number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value:number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value:number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value:number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 480px)',
    bp3: '(min-width: 540px)',
    bp4: '(min-width: 600px)',
    bp5: '(min-width: 720px)',
    bp6: '(min-width: 800px)',
    bp7: '(min-width: 900px)',
    bp8: '(min-width: 1024px)',
    bp9: '(min-width: 1280px)',
    bp10: '(min-width: 1366px)',
    bp11: '(min-width: 1440px)',
    bp12: '(min-width: 1680px)',
    bp13: '(min-width: 1920px)',
    bp14: '(min-width: 2560px)'
  },
})

export const theme1 = createTheme({
  colors: {
    primary: "$OuterSpaceCrayola",
    secondary: "$DavysGrey",
    ternary: "$MintCream",
    button:"$PersianOrange",
    background: "$MintCream",
    border:"$PersianOrange"
  },
});
export const theme2 = createTheme({
  colors: {
    primary: "$BlackCoral",
    secondary: "$DavysGrey",
    button:"$CGBlue",
    background: "$AliceBlue",
    border:"$CGBlue"
  },
});
export const theme3 = createTheme({
  colors: {
    primary: "$OuterSpaceCrayola",
    secondary: "$DavysGrey",
    button:"$PrincetonOrange",
    background: "$Cornsilk",
    border:"$PrincetonOrange"
  },
});
export const theme4 = createTheme({
  colors: {
    primary: "$OuterSpaceCrayola",
    secondary: "$DavysGrey",
    button:"$BlueMunsell",
    background: "$LightCyan",
    border:"$BlueMunsell"
  },
});
export const theme5  = createTheme({
  colors: {
    primary: "$AliceBlue",
    secondary: "$PrussianBlue",
    button:"$AliceBlue",
    background: "$SaphireBlue",
    border: "$AliceBlue"
  },
});