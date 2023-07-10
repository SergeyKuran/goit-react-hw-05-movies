import { useState } from 'react';
import { Container } from './Movies.styled';

const Movies = () => {
  const [seachText, setSeachText] = useState('');

  const onHangleChange = evt => {
    setSeachText(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <Container>
      <form
        onSubmit={() => {
          onHandleSubmit();
        }}
      >
        <input
          type="text"
          value={seachText}
          autoComplete="on"
          placeholder="Please, enter seach movies"
          onChange={onHangleChange}
        />
      </form>
      Movies
    </Container>
  );
};

export default Movies;
