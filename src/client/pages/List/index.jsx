import React from 'react';
import ListContainer from '../../containers/List';
import SearchBar from '../../components/SearchBar';
import Filter from '../../containers/Filter';

export default function PageList() {
  return (
    <>
      <SearchBar />
      <Filter />
      <ListContainer />
    </>
  );
}
