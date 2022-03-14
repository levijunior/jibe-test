import React from 'react';
import { arrayOf, string } from 'prop-types';
import { ProductTextCategory } from './atoms';

export default function Category({ categories }) {
  return (
    <ProductTextCategory>
      { categories.join(', ') }
    </ProductTextCategory>
  );
}

Category.propTypes = {
  categories: arrayOf(string).isRequired,
};
