import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages'
import About from './pages/about'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Link to='/'>Home</Link>
      <br />
      <Link to='/about'>About</Link>
    </div>
  )
}

export default App
