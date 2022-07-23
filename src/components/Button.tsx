import { styled } from "../../stitches.config";


const BtnStyled = styled("button", {
  backgroundColor: "$secondary",
  borderRadius: "999999px",
  fontSize:"13px",
  padding: "10px 15px",
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

export type BtnType = {
  content:string;
  type?:string;
}

const Cta = ({content, type}:BtnType) => {
  return (
    <BtnStyled>{content}</BtnStyled>
  )
};

export default Cta;