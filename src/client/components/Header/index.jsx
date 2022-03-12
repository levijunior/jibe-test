import React, { useState } from 'react';
import {
  HeaderWrapper,
  CartButton,
  CartList,
  CartListItem,
} from './atoms';
import JIBELogo from '../../assets/images/jibe-logo.svg';
import { useAppContext } from '../../store/context';

export default function Header() {
  const [showCartList, setShowCartList] = useState(false);
  const { state } = useAppContext();

  const cartItemsQtd = state.cart.reduce((obj, item) => {
    const newObj = { ...obj };
    newObj[item.id] = (newObj[item.id] || 0) + 1;
    return newObj;
  }, {});

  const cartItems = state.cart.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);

  return (
    <HeaderWrapper>
      <img src={JIBELogo} alt="Jibe" width="auto" height="25" />
      <CartButton className={showCartList ? 'active' : ''} onClick={() => setShowCartList(!showCartList)}>
        Cart (
        { state.cart.length }
        )
      </CartButton>
      {showCartList
        && (
        <CartList>
          {cartItems.map(item => (
            <CartListItem key={item.id}>
              <p>{item.title}</p>
              <p>
                <small>
                  {cartItemsQtd[item.id]}
                  X
                </small>
                {' '}
                <b>{item.sale_price}</b>
              </p>
            </CartListItem>
          ))}
        </CartList>
        )
      }
    </HeaderWrapper>
  );
}
