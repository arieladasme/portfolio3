import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner, NavBar, Skills, Projects, Contact, Footer } from './components'
import { sendMessage } from './services'

function App() {
  useEffect(() => {
    sendMessage()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
