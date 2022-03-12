import styled from 'styled-components';

export const ListWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;

  @media(max-width: 1480px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media(max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media(max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media(max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
