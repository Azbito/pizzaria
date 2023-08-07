import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { AuthContext } from '../contexts/Auth'

export function PrivateRoutes({ children }) {
  const { userData } = useContext(AuthContext)

  if (userData) {
    return children
  }

  return <Navigate to="/sign_in" />
}
