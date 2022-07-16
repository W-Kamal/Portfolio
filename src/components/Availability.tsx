import { styled } from "@stitches/react"
import { useState } from "react"

// est ce qu'il faut une autre fonction stitches pour 
// utiliser variants ?
const StyledAvailability = styled('span', {
  "&::before":{
    backgroundColor: "#95cd71",
    content:"",
    display: "inline-block",
    verticalAlign:"middle",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    marginRight: "10px"
  },
  variants:{
    variant:{
      unavailable:{
        "&::before":{
          backgroundColor: "red"
        }        
      }
    }
  }
})

// si status est à true le before aura la couleur red sinon couleur green
const Availability = () => {
  const [available]=useState(true)
  return (
    <div>
      {available ? (
        <StyledAvailability>
          Available for frontend developper position / mock-up integration / Freelance
        </StyledAvailability>
      ):(
        <StyledAvailability variant={"unavailable"}>
          I&lsquo;m already on mission, but feel free to send me your inquiries
        </StyledAvailability>
      )}
      
    </div>
  )
}

export default Availability