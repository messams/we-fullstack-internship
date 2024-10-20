import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import About from './routes/About'
import Curriculums from './routes/Curriculums'
import Projects from './routes/Projects'

import Layout from './components/Layout'

function App() {


  return (
    <BrowserRouter>

      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="curriculums" element={<Curriculums />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
