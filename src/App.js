import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brendon Williams</h1>
      </header>
      <main>
        <h1>About</h1>
        <About />
        <h1>Experience</h1>
        <Experience />
        <h1>Skills</h1>
        <Skills />
        <h1>Projects</h1>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
