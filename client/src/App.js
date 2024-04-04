import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact.js';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;
