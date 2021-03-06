import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { ListWrapper } from '../../components/List/atoms';
import { useAppContext } from '../../store/context';

export default function List({ searchValue }) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const navigate = useNavigate();

  const { state } = useAppContext();

  const queryParams = window.location.search;

  const stringToNumber = value => Number(value.replace(/[^0-9.-]+/g, ''));

  useEffect(() => {
    fetch(`/api/products${queryParams}`)
      .then(resp => resp.json())
      .then((data) => {
        setProducts(data);
        setProductsFiltered(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [queryParams]);

  useEffect(() => {
    const rx = new RegExp(searchValue, 'gi');
    const result = products.filter(item => item.title.match(rx));
    setProductsFiltered(result);
  }, [searchValue]);

  useEffect(() => {
    const op = state.sortUp ? 1 : -1;
    const sortProducts = [...productsFiltered].sort((a, b) => (
      (stringToNumber(a.price) > stringToNumber(b.sale_price)) ? (1 * op) : (-1 * op)));
    setProductsFiltered(sortProducts);
  }, [state.sortUp]);

  const handleClick = (productId) => {
    navigate(`products/${productId}`);
  };

  if (!products.length) {
    return null;
  }

  return (
    <ListWrapper>
      {productsFiltered.map(product => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          category={product.categories.join(', ')}
          title={product.title}
          price={product.price}
          salesPrice={product.sale_price}
          onClick={() => handleClick(product.id)}
        />
      ))}
    </ListWrapper>
  );
}

List.propTypes = {
  searchValue: string,
};

List.defaultProps = {
  searchValue: '',
};
