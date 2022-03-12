import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #c0c0c0;
`;

export const FilterButton = styled.button`
  background-color: transparent;
  padding: 0;
  padding-bottom: 10px;
  margin: 15px 0;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  text-decoration: underline;
`;

export const OrderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderButton = styled(FilterButton)`
  position: relative;
  padding-right: 25px;

  &::after {
    content: '';
    position: absolute;
    top: 5px;
    right: 0;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &.up::after {
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #393d46 transparent;
  }

  &.down::after {
    border-width: 10px 7.5px 0 7.5px;
    border-color: #393d46 transparent transparent transparent;
}
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media(max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FilterName = styled.div`
  color: #68768e;
  font-size: 12px;
  margin-right: 20px;
  text-transform: capitalize;
  width: 70px;
  margin-bottom: 5px;
`;

export const FilterElement = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;
  width: 120px;
  margin-bottom: 5px;
`;

export const FilterBox = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  border: 2px solid #393d46;
  margin-right: 5px;

  &.active {
    background-color: #393d46;
  }
`;
