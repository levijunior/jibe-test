import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterComponent from '../../components/Filter';
import { useAppContext } from '../../store/context';
import {
  FilterWrapper,
  FilterButton,
  OrderBar,
  OrderButton,
} from '../../components/Filter/atoms';

export default function Filter() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState();
  const [filterItems, setFilterItems] = useState({});

  const navigate = useNavigate();

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetch('/api/filters')
      .then(resp => resp.json())
      .then((data) => {
        setFilters(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!filters?.categories || !filters?.color || !filters?.sizes) return null;

  const handleFilter = (name, opt) => {
    const options = Object.keys(opt).filter(o => opt[o]);
    const filterOptions = {
      ...filterItems,
      [name]: options,
    };
    setFilterItems(filterOptions);

    const queryString = Object.keys(filterOptions).map(key => `${key}=${filterOptions[key]}`).join('&');
    const hasFilter = Object.keys(filterOptions).filter(item => filterOptions[item].length);

    if (hasFilter.length) {
      navigate(`/?${queryString}`);
    } else {
      navigate('/');
    }
  };

  const handleSort = () => {
    dispatch({
      type: 'SET_SORT',
      sortUp: !state.sortUp,
    });
  };

  return (
    <>
      <OrderBar>
        <FilterButton onClick={() => setShowFilters(!showFilters)}>
          Filters
        </FilterButton>
        <OrderButton
          className={state.sortUp ? 'up' : 'down'}
          onClick={handleSort}
        >
          Order by price
        </OrderButton>
      </OrderBar>
      {showFilters && (
        <FilterWrapper>
          <FilterComponent filterName="category" elements={filters.categories} onClick={handleFilter} />
          <FilterComponent filterName="color" elements={filters.color} onClick={handleFilter} />
          <FilterComponent filterName="size" elements={filters.sizes} onClick={handleFilter} />
        </FilterWrapper>
      )}
    </>
  );
}
