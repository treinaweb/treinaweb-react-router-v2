import { Link, replace, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import './App.css'
import Index from './pages'
import About from './pages/about'
import Produtos, { Produto } from './pages/produtos'
import { useEffect } from 'react'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  useEffect(() => {
    if(location.pathname.includes('2')) {
      navigate('/produtos/1');
    }
  }, [location, navigate])


  return (
    <div>
     <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/produtos/*' element={<Produtos />} >
          <Route path=":id" element={<Produto />} />
        </Route>
      </Routes>

      <Link to='/'>Home</Link>
      <br />
      <Link to='/produtos'>Produtos</Link>
      <br />
      <Link to='/about/1'>About 1</Link>
      <br />
      <Link to='/about/2'>About 2</Link>
    </div>
  )
}

export default App
