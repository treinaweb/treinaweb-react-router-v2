import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages'
import About from './pages/about'
import Produtos, { Produto } from './pages/produtos'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/produtos/*' element={<Produtos />} >
          <Route path=":id" element={<Produto />} />
        </Route>
      </Routes>

    {/*  <Link to='/'>Home</Link>
      <br />
      <Link to='/produtos'>Produtos</Link>
      <br />
      <Link to='/about/1'>About 1</Link>
      <br />
      <Link to='/about/2'>About 2</Link> */}

    </div>
  )
}

export default App
