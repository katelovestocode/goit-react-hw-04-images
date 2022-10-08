import { Circles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Circles
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};
