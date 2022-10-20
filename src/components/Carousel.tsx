import React, { MouseEventHandler } from "react"
import { useState } from "react"
import { Projects as ProjectsType } from '@/utils/types';
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

export const Carousel = ({ projects }: ProjectsType): JSX.Element => {
  const [currentIndex, SetIndex] = useState<number>(0)

  const goToPrevious: MouseEventHandler<HTMLButtonElement> = (): void => {
    const isFirst = currentIndex === 0;
    const index = isFirst ? projects.length - 1 : currentIndex - 1;
    SetIndex(index)
  }
  const goToNext: MouseEventHandler<HTMLButtonElement> = (): void => {
    const isLast = currentIndex === projects.length - 1;
    const index = isLast ? 0 : currentIndex + 1;
    SetIndex(index)
  }
  const goTo = (index: number): void => {
    SetIndex(index)
  }

  return (
    <Wrapper>
      <button className="left_arrow" onClick={goToPrevious}>❰</button>
      <button className="right_arrow" onClick={goToNext}>❱</button>
      <Project props={projects[currentIndex]} />
      <IndicatorList className="pagination">
        {projects.map((item: any, index: number) => (
          <Indicator variant={"over"} key={index} onClick={() => goTo(index)}></Indicator>
        ))}
      </IndicatorList>
    </Wrapper>
  )
}
