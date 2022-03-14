import styled from 'styled-components';

export const ProductWrapper = styled.section`
  display: flex;
  position: relative;
  background-color: white;
  height: calc(100vh - 175px);
  min-height: 400px;

  @media(max-width: 800px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const ProductTextWrapper = styled.div`
  padding: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  border: 1px solid #ebebeb;
  margin: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1px;

  & > div {
    overflow: hidden;

    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    &:nth-child(2) {
      grid-column: 1 ;
      grid-row: 2 ;
    }

    &:nth-child(3) {
      grid-column: 2 ;
      grid-row: 1 / 3;
    }

    & > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center;
    }
  }

  @media(max-width: 800px) {
    width: 100%;
    margin: 0;
    aspect-ratio: 1;
  }
`;

export const ProductTextTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 700;
  margin-top: 0;
`;

export const ProductTextCategory = styled.p`
  font-size: 14px;
  color: #68768e;
  margin-top: 0;
  margin-bottom: 50px;
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  @media(max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductDetailLabel = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ProductTextPrice = styled.p`
  font-size: 12px;
  color: #c13e3e;
  text-decoration: line-through;
  margin: 0;
`;

export const ProductTextSalePrice = styled.p`
  font-size: 21px;
  margin: 0;
  font-weight: 500;
`;

export const ProductColor = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props['bg-color']};
`;

export const ProductSizeWrapper = styled.div`
  display: flex;
`;

export const ProductSize = styled.button`
  display: block;
  font-size: 16px;
  color: #b3bac6;
  margin: 0;
  font-weight: 700;
  background: transparent;
  border: none;
  padding: 0;
  margin-right: 15px;
  cursor: pointer;
  text-align: left;

  &.active {
    color: #393d46;
  }
`;

export const AddCartButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 20px 25px;
  border: 2px solid #393d46;
  border-radius: 0;
  width: 200px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  &:disabled {
    cursor: not-allowed;
  } 
`;
