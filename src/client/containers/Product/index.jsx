import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import Product from '../../components/Product';
import { useAppContext } from '../../store/context';

export default function ProductContainer({ id }) {
  const [productDetails, setProductDetails] = useState();
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(resp => resp.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => {
        console.error(error);
        navigate('/');
      });

    return () => {
      setProductDetails();
    };
  }, []);

  if (!productDetails) return null;

  const handleShoppingCart = (cart) => {
    if (productDetails.in_stock.toLowerCase() === 'yes') {
      dispatch({
        type: 'UPDATE_CART',
        cart: [cart],
      });
    }
  };

  return (
    <>
      <p>
        <Link to="/">Home</Link>
        {' '}
        {'> '}
        {productDetails.title}
      </p>
      <Product
        productData={productDetails}
        handleShoppingCart={handleShoppingCart}
      />
    </>
  );
}

ProductContainer.propTypes = {
  id: string.isRequired,
};
