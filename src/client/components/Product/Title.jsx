import React from 'react';
import { string } from 'prop-types';
import { ProductTextTitle } from './atoms';

export default function Title({ title }) {
  return (
    <ProductTextTitle>
      { title }
    </ProductTextTitle>
  );
}

Title.propTypes = {
  title: string.isRequired,
};
