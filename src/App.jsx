
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './compenents/NavBar'
import Products from './compenents/Products'
import Cart from './compenents/Cart'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
