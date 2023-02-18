import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
    const isLoggedIn = localStorage.getItem("loginUser");
    // const isLoggedIn = sessionStorage.getItem("loginUser");
    console.log(isLoggedIn);
    
  return (
    <>
    {isLoggedIn ? <Outlet/> : <Navigate to="/login"/>}
    </>
  )
}