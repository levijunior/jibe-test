import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: white;
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, .05)
  }
`;

export const CardImage = styled.div`
  display: block;
  overflow: hidden;
  aspect-ratio: 1;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const CardTextWapper = styled.div`
  padding: 25px;
`;

export const TextCard = styled.p`
  margin: 0;
`;

export const TextCardCategory = styled(TextCard)`
  font-size: 10px;
  color: #68768e;
  margin-bottom: 5px;
`;

export const TextCardTitle = styled(TextCard)`
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 700;
`;

export const TextCardPrice = styled(TextCard)`
  font-size: 12px;
  color: #c13e3e;
  text-decoration: line-through;
  margin-bottom: 1px;
`;

export const TextCardSalePrice = styled(TextCard)`
  font-size: 16px;
  margin-bottom: 0;
`;
