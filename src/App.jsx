import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<Home />}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/settings' exact element={<Settings />}></Route>
      </Routes>
        </BrowserRouter>
      
      
    </>
  )
}

export default App
