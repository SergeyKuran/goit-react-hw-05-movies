import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';

const HomePage = lazy(() => import('./Pages/HomePage'));
const Movies = lazy(() => import('./Pages/MoviesPage'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast/'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default App;
