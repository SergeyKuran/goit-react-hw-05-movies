import { useState, useEffect } from 'react';
import { A, Container, Li } from 'components/Pages/HomePage/Home.styled';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';

const API_KEY = 'a964e94c1561e7a69226f00af2f59a8a';
const params = new URLSearchParams({
  api_key: API_KEY,
  per_page: 10,
});

const Home = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/trending/movie/day?${params}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error();
      })
      .then(data => {
        setImages([...data.results]);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Container>{error.message}</Container>}
      <h2>Trending today</h2>
      <ul>
        <Li>
          {images.map(({ id, title }) => (
            <A to={`/movies/${id}`} key={id}>
              {title}
            </A>
          ))}
        </Li>
      </ul>
    </Container>
  );
};

export default Home;
