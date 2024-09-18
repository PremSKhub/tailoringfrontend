import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Login from '../Login/Login'
import NavBar from '../NavBar/NavBar'

const ProductedRoute = ({isAuth}) => {
  if (!isAuth){
    return <Navigate to="/login"/>
  }
  return <Outlet></Outlet> 
}

export default ProductedRoute