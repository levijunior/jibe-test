import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  position: relative;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
`;

export const CartButton = styled.button`
  background-color: transparent;
  padding: 20px 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover, &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const CartList = styled.div`
  position: absolute;
  background-color: white;
  padding: 10px 25px;
  right: 0;
  top: 84px;
  border: 2px solid #393d46;
  width: 500px;
  max-width: 100%;
  z-index: 9;
`;

export const CartListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f6f7fb;

  & > p {
    margin: 0;
  }

  &:last-child {
    border: none
  }
`;
