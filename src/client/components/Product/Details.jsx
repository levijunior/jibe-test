import React, { useState } from 'react';
import {
  shape, string, arrayOf, func,
} from 'prop-types';
import {
  ProductDetailsWrapper,
  ProductDetailLabel,
  ProductTextPrice,
  ProductTextSalePrice,
  ProductColor,
  ProductSize,
  ProductSizeWrapper,
} from './atoms';

export const Price = ({ price, salePrice }) => (
  <div>
    <ProductDetailLabel>Price:</ProductDetailLabel>
    <ProductTextPrice>{price}</ProductTextPrice>
    <ProductTextSalePrice>{salePrice}</ProductTextSalePrice>
  </div>
);

export const Color = ({ color }) => (
  <div>
    <ProductDetailLabel>Color:</ProductDetailLabel>
    <ProductColor bg-color={color} />
  </div>
);

export const Sizes = ({ sizes, onChange }) => {
  const [sizeIndex, setSizeIndex] = useState(0);

  const hadleChange = (index) => {
    setSizeIndex(index);
    onChange(index);
  };

  return (
    <div>
      <ProductDetailLabel>Sizes:</ProductDetailLabel>
      <ProductSizeWrapper>
        {sizes.map((size, index) => (
          <ProductSize
            key={size}
            onClick={() => hadleChange(index)}
            className={sizeIndex === index ? 'active' : ''}
          >
            {size}
          </ProductSize>
        ))}
      </ProductSizeWrapper>
    </div>
  );
};

export default function Details({ product, handleSize }) {
  return (
    <ProductDetailsWrapper>
      <Price price={product.price} salePrice={product.sale_price} />
      <Color color={product.color} />
      <Sizes sizes={product.sizes} onChange={handleSize} />
    </ProductDetailsWrapper>
  );
}

Details.propTypes = {
  product: shape({
    color: string,
    price: string,
    sale_price: string,
    sizes: arrayOf(string),
  }).isRequired,
  handleSize: func,
};

Details.defaultProps = {
  handleSize: () => null,
};

Price.propTypes = {
  price: string.isRequired,
  salePrice: string.isRequired,
};

Color.propTypes = {
  color: string.isRequired,
};

Sizes.propTypes = {
  sizes: arrayOf(string).isRequired,
  onChange: func,
};

Sizes.defaultProps = {
  onChange: () => null,
};
