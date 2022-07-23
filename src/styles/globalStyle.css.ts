import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*':{
    boxSizing: 'border-box'
  },
  'body':{
    margin: 0
  },
  'a':{
    color: 'inherit',
    textDecoration : 'none'
  }
});