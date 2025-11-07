import Header from './components/Header/Header'
import About from './components/About/About'
import Terminal from './components/Terminal/Terminal'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="pattern-wrapper">
      <div className="pattern-container" />
      <Header />
      <About />
      <Terminal />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
