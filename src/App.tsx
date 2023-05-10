import React from 'react'
import { Users, SignUp, Login } from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
