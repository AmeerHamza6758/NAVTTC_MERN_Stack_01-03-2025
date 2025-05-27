import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './layout/layout'
import Home from './pages/Home'
import CompA from './components/CompA'
import ProductsForm from './components/Products'


function App() {
  return (
    <div>
      <Layout/>     
      {/* <ProductsForm/> */}
      {/* <CompA /> */}
      {/* <Home /> */}
    </div>
  )
}

export default App
