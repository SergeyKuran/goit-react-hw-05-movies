import { useState, useEffect } from 'react';
import { A, Container, Li } from 'components/Pages/HomePage/Home.styled';
import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';
import params from 'api/api_key';

const Home = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?${params}`
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
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Container>{error.message}</Container>}
      <h2>Trending today</h2>
      <ul>
        {images?.map(({ id, title }) => (
          <Li key={id}>
            <A to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </A>
          </Li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
