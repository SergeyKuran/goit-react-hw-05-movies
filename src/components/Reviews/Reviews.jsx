import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import params from 'api/api_key';

import { Container } from './Reviews.styled';

const Reviews = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?${params}`
        );

        if (response.ok) {
          const { results } = await response.json();
          setImages(results);
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
          <p>We don`t have many reviews for this movies.</p>
        ) : (
          images.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
