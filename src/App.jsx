import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Spinner from './Components/Spinner'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductCard from './Components/ProductCard'
import ProductDetail from './Pages/ProductDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
   <Navbar></Navbar>
   
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
    
   </Routes>

    </div>
  )
}

export default App
