import {Projects} from "../types/Projects"

interface Props {
  type: ["Openclassrooms" | "Training" | "Client Project" | "Tuto"];
  status: ["Completed" | "Wip" | "Standby"|"Abandonned"];
  stack: ["React.js"| "Vite.js"| "Node.js"|"Js"|"Html"|"Css"|"Express"|"Figma"|"Storybook"|"Redux"|"Redux Toolkit"|"Firebase"|"Supabase"|"Lighthouse"|"Jest"|"Zustand"|"ReCharts"|"Axios"|"Next.js"];
}
// fetch data here ?


/* Lightbox Navigation function from P6
next(e) {
  e.preventDefault()
  this.currentIndex++
  if (this.currentIndex === this.srcList.length) {
    this.currentIndex = 0
  }
  this.render(this.srcList[this.currentIndex])
}
prev(e) {
  e.preventDefault()
  this.currentIndex--
  if (this.currentIndex < 0) {
    this.currentIndex = this.srcList.length - 1
  }
  this.render(this.srcList[this.currentIndex])
}
*/


const ProjectCarroussel = () => {
  return (
    <div>
      <article className="project__wrapper">
        <div className="project__view">

        </div>
        <div className="project__summary"></div>
      </article>
    </div>
  )
}

export default ProjectCarroussel