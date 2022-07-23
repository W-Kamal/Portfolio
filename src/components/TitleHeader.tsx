import { styled } from "@stitches/react"

const StyledTitle = styled("h1", {})
const StyledSubtitle = styled("p", {})

const TitleHeader = () => {
  return (
    <>
      <StyledTitle>Donner du sens aux projets</StyledTitle>
      {/* <h1>Let's give meaning to your projects</h1> */}
      {/* <p>I build frontend solution for your projects</p> */}
      <StyledSubtitle>
        Je suis sur la voie du développeur Font-end Applicatif, je veux monter en compétences et créer des solutions.
      </StyledSubtitle>
    </>
  )
}

export default TitleHeader