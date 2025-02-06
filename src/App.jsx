import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Reference from './components/Reference';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Reference />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
