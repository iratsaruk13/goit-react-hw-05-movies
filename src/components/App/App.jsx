import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home"
import Movies from "../../pages/Movies"
import { MovieDetails } from "../../pages/MovieDetails"
import { Container } from "./App.styled"
import { SharedLayout } from "../Layout/Layout"

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route  index element={<Home/>} /> 
          <Route  path="/movies" element={<Movies/>} />
          <Route  path="/movies/:id" element={<MovieDetails/>} />
        </Route>
      </Routes>

    </Container>
  )
}

export default App