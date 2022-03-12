import React, { useEffect } from 'react';
import { node } from 'prop-types';
import TemplateContainer from '../../components/Template';
import Header from '../../components/Header';
import { useAppContext } from '../../store/context';

export default function Product({ children }) {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetch('/api/username')
      .then(resp => resp.json())
      .then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        });
      })
      .catch((error) => {
        console.error(error);
      });

    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      const cart = JSON.parse(storageCart);

      dispatch({
        type: 'UPDATE_CART',
        cart
      });
    }
  }, []);

  useEffect(() => {
    if (state.cart.length) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <TemplateContainer>
      <Header />
      {children}
    </TemplateContainer>
  );
}

Product.propTypes = {
  children: node.isRequired,
};
