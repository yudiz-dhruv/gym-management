import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function PublicRoute() {

  const token = localStorage.getItem('token') || sessionStorage.getItem('token')
  const location = useLocation()
  const redirect = location?.pathname === '/' ? location?.pathname : '/dashboard'
  if (token) return <Navigate to={redirect} replace />
  return <Outlet />
}

PublicRoute.propTypes = {
  element: PropTypes.element,
}
export default PublicRoute
