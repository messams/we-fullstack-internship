import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './theme-data.css'
import Home from './pages/Home'
import About from './pages/About'
import Curriculums from './pages/Curriculums'
import Tasks from './pages/Tasks'
import Projects from './pages/Projects'

import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculums" element={<Curriculums />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
