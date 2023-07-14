import { Triangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{
          display: 'flex',
          gap: '10px',
          textAlign: 'center',
          margin: '0 auto',
        }}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
