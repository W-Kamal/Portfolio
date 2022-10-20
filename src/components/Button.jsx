import React from "react";
import { styled } from "../../stitches.config";


const BtnStyled = styled("button", {
  backgroundColor: "$secondary",
  borderRadius: "999999px",
  radii: "$round",
  fontSize:"$2",
  paddingX: 0.8,
  paddingY: 1,
  $$shadowColor: 'red',
  boxShadow: '0 0 0 15px $$shadowColor',
  "&:hover": {
    backgroundColor: "$primary",
  },
  variants:{
    variant:{
      unavailable:{
        "&:hover":{
          backgroundColor: "red"
        }        
      }
    }
  }
});


const Btn = ({content, type}) => {
  return (
    <BtnStyled className={type}>{content}</BtnStyled>
  )
};

export default Btn;