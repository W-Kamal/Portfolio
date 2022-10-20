import { useState } from "react"
import { Project } from "./Project";
import { styled } from "../../stitches.config";

const Wrapper = styled('div', {
  width: '100%',
  height: '20rem',
  MarginTop: '2rem'
});
const IndicatorList = styled('ul', {
  display: 'flex',
});
const Indicator = styled('li', {

  variants: {
    variant: {
      over: {
        "&:hover": {
          width: "1rem",
          height: "1.1rem",
          backgroundColor: "lime"
        }
      },
      unavailable: {
        "&::before": {
          backgroundColor: "red"
        }
      }
    }
  }
});
const PreviousItem = styled('button', {})
const NextItem = styled('button', {})

export const Carousel = ({ projects }) => {
  const [currentIndex, SetIndex] = useState(0)

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const index = isFirst ? projects.length - 1 : currentIndex - 1;
    SetIndex(index)
  }
  const goToNext = () => {
    const isLast = currentIndex === projects.length - 1;
    const index = isLast ? 0 : currentIndex + 1;
    SetIndex(index)
  }
  const goTo = (index) => {
    SetIndex(index)
  }

  return (
    <Wrapper>
      <button className="left_arrow" onClick={goToPrevious}>❰</button>
      <button className="right_arrow" onClick={goToNext}>❱</button>
      <Project props={projects[currentIndex]} />
      <IndicatorList className="pagination">
        {projects.map((item, index) => (
          <Indicator variant={"over"} key={index} onClick={() => goTo(index)}></Indicator>
        ))}
      </IndicatorList>
    </Wrapper>
  )
}
