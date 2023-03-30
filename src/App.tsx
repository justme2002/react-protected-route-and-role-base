import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route element={<ProtectedRoute role='ADMIN' />}>
        <Route path='/admin' element={<Admin />}></Route>
      </Route>
      <Route element={<ProtectedRoute role='USER' />}>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default App