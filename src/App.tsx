export {}
import NamedHeader from "./components/NamedHeader"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NamedHeader />
      </header>
      <main>
        <section id="home"></section>
        <section id="about"></section>
        <section id="showcase">

        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
