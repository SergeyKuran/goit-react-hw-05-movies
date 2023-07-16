import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader';
import params from 'api/api_key';

import { A, Container, Form, Label, Li } from './Movies.styled';

const Movies = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [seachParams, setSeachParams] = useSearchParams('');
  const seachId = seachParams.get('seachId') ?? '';
  const location = useLocation();

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('search'));
    if (savedResults) {
      setImages(savedResults);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }

    localStorage.setItem('search', JSON.stringify(images));
  }, [images]);

  const onHandleSubmit = evt => {
    evt.preventDefault();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${seachId}&${params}`
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
  };

  return (
    <Container>
      <Form onSubmit={onHandleSubmit}>
        <Label>
          Movies
          <input
            type="text"
            value={seachId}
            autoComplete="on"
            placeholder="Please, enter seach movies"
            onChange={evt => setSeachParams({ seachId: evt.target.value })}
          />
        </Label>
      </Form>
      {isLoading && <Loader />}
      {error && <Container>{error.message}</Container>}
      <ul>
        {images?.map(el => (
          <Li key={el.id}>
            <A to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </A>
          </Li>
        ))}
      </ul>
    </Container>
  );
};

export default Movies;
