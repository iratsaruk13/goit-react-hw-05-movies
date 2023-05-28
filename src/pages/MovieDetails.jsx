import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const {id} = useParams();
  return (
    <div>MovieDetails {id} 
    <Outlet />
    </div>
  )
}
 export default MovieDetails