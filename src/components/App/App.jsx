import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import MovieDetails from "../../pages/MovieDetails";
import { Container } from "./App.styled";
import SharedLayout from "../Layout/Layout";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
