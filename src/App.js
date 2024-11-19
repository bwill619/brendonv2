import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("skills")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Contact</button>
        </nav>
        <h1>Brendon Williams</h1>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <About />
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <Experience />
        </section>
        <section id="skills">
          <h1>Skills</h1>
          <Skills />
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
