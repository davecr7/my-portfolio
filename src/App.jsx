
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from'./components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from'./components/Projects'
import Contact from'./components/Contact'
import Achievements from'./components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      
      <h1>Welcome to My Portfolio</h1>
      <p>I'm an aspiring Software Developer.</p>

<button
  onClick={() =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
>
  Back to Top ↑
</button>

    </div>
  )
}
export default App
