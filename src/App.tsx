export {}
import Button from "./components/Button"
import ComposedHeader from "./components/ComposedHeader"
import Availability from "./components/Availability"
import ProjectCarroussel from "./components/ProjectCarroussel"

function App() {
  
  return (
    <div className="page-wrapper">
      <header className="header__wrapper">
        <ComposedHeader />
        <Button />
        <Availability />
      </header>
      <main>
        <section id="showcase">
          <ProjectCarroussel />
        </section>
        <section id="about"></section>
      </main>
      <footer>
        <Availability />
        <Button />
      </footer>
    </div>
  )
}

export default App
