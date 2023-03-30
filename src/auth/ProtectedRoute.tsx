import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Home from '../pages/Home'


const ProtectedRoute = ({ role }: { role?: string }) => {

  const { accessToken } = useAuth()
  const navigate = useNavigate()

  if (!accessToken) {
    return <div>
      <h1>You don't have any permission here</h1>
    </div>
  }

  if (!role) {
    return <div>
      <h1>You don't have any permission</h1>
    </div>
  }

  useEffect(() => {
    if (role == "USER") navigate("/profile")
    if (role == "ADMIN") navigate("/admin")
  }, [role])
  
  return <Outlet />
}

export default ProtectedRoute