import React, { useState } from 'react';
import ListContainer from '../../containers/List';
import SearchBar from '../../components/SearchBar';
import Filter from '../../containers/Filter';

export default function PageList() {
  const [searchValue, setSearchValue] = useState();

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <SearchBar onChange={handleSearch} />
      <Filter />
      <ListContainer searchValue={searchValue} />
    </>
  );
}
