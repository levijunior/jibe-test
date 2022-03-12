import React, { useState } from 'react';
import { string, arrayOf, func } from 'prop-types';
import {
  FilterGroup,
  FilterName,
  FilterElement,
  FilterBox,
} from './atoms';

export default function Filter({ filterName, elements, onClick }) {
  const filterOptions = elements.reduce((previous, current) => ({
    ...previous,
    [current]: false,
  }), {});

  const [options, setOptions] = useState(filterOptions);

  const handleFilter = (el) => {
    const udatedOptions = {
      ...options,
      [el]: !options[el],
    };
    setOptions(udatedOptions);
    onClick(filterName, udatedOptions);
  };

  return (
    <FilterGroup>
      <FilterName>
        {filterName}
        :
      </FilterName>
      {Object.keys(options).map(el => (
        <FilterElement onClick={() => handleFilter(el)} key={el}>
          <FilterBox className={options[el] ? 'active' : ''} />
          {' '}
          {el}
        </FilterElement>
      ))}
    </FilterGroup>
  );
}

Filter.propTypes = {
  filterName: string.isRequired,
  elements: arrayOf(string).isRequired,
  onClick: func,
};

Filter.defaultProps = {
  onClick: () => null,
};
