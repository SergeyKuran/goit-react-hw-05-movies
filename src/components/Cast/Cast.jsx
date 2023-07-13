import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import { Container, Li } from './Cast.styled';

const API_KEY = 'a964e94c1561e7a69226f00af2f59a8a';
const params = new URLSearchParams({
  api_key: API_KEY,
  per_page: 10,
});

const Cast = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?${params}`
        );

        if (response.ok) {
          const { cast } = await response.json();
          setImages(cast);
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
      {isLoading && <Loader />}
      {error && <Container>{error.message}</Container>}
      <ul>
        {images.length === 0 ? (
          <p>We don`t have many cast for this movies.</p>
        ) : (
          images?.map(({ id, profile_path = 'No images', character, name }) => (
            <Li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={character}
              />
              <h3>{name}</h3>
              <p>
                Character:
                {character}
              </p>
            </Li>
          ))
        )}
      </ul>
    </>
  );
};

export default Cast;
