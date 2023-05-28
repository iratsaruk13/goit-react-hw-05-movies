import React from 'react'
import {Header} from '../App/App.styled'
import { NavLink, Outlet } from 'react-router-dom'

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
      <main><Outlet /> </main>
    </>
    
  )
}

export default SharedLayout
