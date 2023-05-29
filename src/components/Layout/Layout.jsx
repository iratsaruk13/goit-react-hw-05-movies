import React, { Suspense } from 'react'
import {Header} from '../App/App.styled'
import { NavLink, Outlet } from 'react-router-dom'
import Loader from '../Loader/Loader'

const SharedLayout = () => {
  return (
    <>
    <Header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}><main><Outlet /> </main></Suspense>
    </>
    
  )
}

export default SharedLayout
