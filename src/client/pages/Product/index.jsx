import React from 'react';
import { useParams } from 'react-router-dom';
import ProductContainer from '../../containers/Product';

export default function Product() {
  const { id } = useParams();

  return (
    <ProductContainer id={id} />
  );
}
