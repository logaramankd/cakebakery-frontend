import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './forms/Auth/Login'
import Register from './forms/Auth/Register'
import Home from './components/pages/Home'
import '../src/app.css'
const App = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
// Josefin Sans