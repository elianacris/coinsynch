import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token] = useState(localStorage.getItem('token'))

  return token ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute
