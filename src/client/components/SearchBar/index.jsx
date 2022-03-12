import React, { useState } from 'react';
import { func } from 'prop-types';
import {
  SearchBarWrapper,
  SearchTextInput,
  SearchIcon,
} from './atoms';
import IconSearch from '../../assets/images/search-icon.svg';

export default function SearchBar({ onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(value);
  };

  return (
    <SearchBarWrapper>
      <SearchTextInput value={inputValue} onChange={handleSearchInput} placeholder="Search products" />
      <SearchIcon src={IconSearch} alt="search" />
    </SearchBarWrapper>
  );
}

SearchBar.propTypes = {
  onChange: func,
};

SearchBar.defaultProps = {
  onChange: () => null,
};
