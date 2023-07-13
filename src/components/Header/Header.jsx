import { Container, Link, HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <>
      <Container>
        <HeaderStyle>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </HeaderStyle>
      </Container>
    </>
  );
};

export default Header;
