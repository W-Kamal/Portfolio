import { FunctionComponent, MouseEventHandler } from "react"
import { useState } from "react"

export const Slider: FunctionComponent = ({ slides }: any) => {
  const [currentIndex, SetIndex] = useState<number>(0)

  const goToPrevious: MouseEventHandler<HTMLButtonElement> = () => {
    const isFirst = currentIndex === 0;
    const index = isFirst ? slides.length - 1 : currentIndex - 1;
    SetIndex(index)
  }
  const goToNext: MouseEventHandler<HTMLButtonElement> = () => {
    const isLast = currentIndex === slides.length - 1;
    const index = isLast ? 0 : currentIndex + 1;
    SetIndex(index)
  }
  const goTo = (index:number):void => {
    SetIndex(index)
  }

  return (
    <div>
      <button className="left_arrow" onClick={goToPrevious}>❰</button>
      <button className="right_arrow" onClick={goToNext}>❱</button>
      <div className="slider"></div>
      <div className="pagination">
        {slides.map((item:any, index:number)=>(
          <div key={index} onClick={()=> goTo(index)}>⚪</div>
        ))}
      </div>
    </div>
  )
}
