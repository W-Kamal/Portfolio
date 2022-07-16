import { styled } from "@stitches/react";

const Btn = styled("button", {
  backgroundColor: "$button",
  borderRadius: "999999px",
  fontSize:"13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});

const Cta = () => <Btn>Btn</Btn>;

export default Cta;