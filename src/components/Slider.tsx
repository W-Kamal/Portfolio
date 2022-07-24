// How to specify that i want to get an array of string options ?
interface Props {
  stack: ["React.js"| "Vite.js"| "Node.js"|"Js"|"Html"|"Css"|"Express"|"Figma"|"Storybook"|"Redux"|"Redux Toolkit"|"Firebase"|"Supabase"|"Lighthouse"|"Jest"|"Zustand"|"ReCharts"|"Axios"|"Next.js"];
};

interface Projects {
  id: number,
  created_at: Date,
  started_date: Date,
  ended_date: Date;
  title: string;
  name:string;
  description: string;
  type: "Openclassrooms" | "Training" | "Client Project" | "Tuto";
  status: "Completed" | "Wip" | "Standby"|"Abandonned";
  goal: string;
  stack: string[];
  is_published: boolean;
  click_score:number;
  paths : {
    thumbnail_path: string;
    repository_path: string;
    demo_path: string;
  }
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


const Slider = () => {
  return (
    <div>
      <article className="project__wrapper">
        <div className="project__view"></div>
        <div className="project__summary"></div>
      </article>
    </div>
  )
};

export default Slider;