import React from 'react'
import Register from './pages/Auth/Register'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Register />

    </div>
  )
}

export default App
