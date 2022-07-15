import { styled } from "@stitches/react";

const Btn = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "10px",
  fontSize:"13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

const Cta = () => <Btn>Btn</Btn>;

export default Cta;