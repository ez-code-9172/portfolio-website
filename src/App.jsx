import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
// import Skills from './components/Skill/Skills';
import Award from './components/Award/Award';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.scss'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    {/* <Skills/> */}
    <Award/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
