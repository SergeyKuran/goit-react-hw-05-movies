import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import { A, Button, Container, Div, Li } from './MovieDetails.styled';
import defaultImage from './';

const API_KEY = 'a964e94c1561e7a69226f00af2f59a8a';
const params = new URLSearchParams({
  api_key: API_KEY,
  per_page: 10,
});

const MovieDetails = () => {
  const [images, setImages] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const moviesDetailsRef = useRef(location.state?.from);
  const date = new Date(images.release_date).getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?${params}`
        );

        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          throw new Error();
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <Container>
        <h2>General information</h2>
        <Link to={moviesDetailsRef.current}>
          <Button type="button">Go to back</Button>
        </Link>
        {isLoading && <Loader />}
        {error && <Container>{error.message}</Container>}
        <ul>
          {images && (
            <Li key={images.id}>
              <div>
                <img
                  src={
                    images.poster_path
                      ? `https://image.tmdb.org/t/p/original/${images.poster_path}`
                      : defaultImage
                  }
                  width="400"
                  height="600"
                  alt={images.title}
                />
              </div>
              <div>
                <h1>
                  {images.title}({date})
                </h1>
                <p>User score {Math.round(images.vote_average)}%</p>
                <h2>Overview</h2>
                <p>{images.overview}</p>
                <h2>Genres</h2>
                <p>{images.genres?.map(el => el.name)}</p>
              </div>
            </Li>
          )}
        </ul>

        <Div>
          <h2>Additional information</h2>
          <A to={`/movies/${movieId}/cast`}>Cast</A>
          <A to={`/movies/${movieId}/reviews`}>Reviwers</A>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Div>
      </Container>
    </>
  );
};

export default MovieDetails;
