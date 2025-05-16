import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CompA from './components/CompA'
import StudentForm from './components/StudentForm'
import Sales from './pages/sales/Sales'
import CompoB from './components/CompoB'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<StudentForm />} />
        <Route element={<CompoB />} path='contact_us'></Route>
        <Route element={<CompA />} path='sales'></Route>
        {/* <Route element={ } path=''></Route> */}
      </Routes>
    </div>
  )
}

export default App
