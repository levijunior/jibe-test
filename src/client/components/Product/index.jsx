import React, { useState } from 'react';
import {
  shape, string, number, arrayOf, func,
} from 'prop-types';
import {
  ProductWrapper,
  ProductTextWrapper,
  ProductImageWrapper,
  ProductTextTitle,
  ProductTextCategory,
  ProductDetailsWrapper,
  ProductDetailLabel,
  ProductTextPrice,
  ProductTextSalePrice,
  ProductColor,
  ProductSizeWapper,
  ProductSize,
  AddCartButton,
} from './atoms';

export default function Product({ productData: product, handleShoppingCart }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  product.sizes = [...new Set(product.sizes)];
  const inStock = product.in_stock.toLowerCase() === 'yes';

  return (
    <ProductWrapper>
      <ProductTextWrapper>

        <ProductTextTitle>
          { product.title }
        </ProductTextTitle>

        <ProductTextCategory>
          {product.categories.join(', ')}
        </ProductTextCategory>

        <ProductDetailsWrapper>
          <div>
            <ProductDetailLabel>Price:</ProductDetailLabel>
            <ProductTextPrice>{product.price}</ProductTextPrice>
            <ProductTextSalePrice>{product.sale_price}</ProductTextSalePrice>
          </div>
          <div>
            <ProductDetailLabel>Color:</ProductDetailLabel>
            <ProductColor bg-color={product.color} />
          </div>
          <div>
            <ProductDetailLabel>Sizes:</ProductDetailLabel>
            <ProductSizeWapper>
              {product.sizes.map((size, index) => (
                <ProductSize
                  key={size}
                  onClick={() => setSizeIndex(index)}
                  className={sizeIndex === index ? 'active' : ''}
                >
                  {size}
                </ProductSize>
              ))}
            </ProductSizeWapper>
          </div>
        </ProductDetailsWrapper>

        <AddCartButton
          disabled={!inStock}
          onClick={() => handleShoppingCart(product)}
        >
          {inStock ? 'Add to cart' : 'Out of stock'}
        </AddCartButton>
      </ProductTextWrapper>

      <ProductImageWrapper>
        <img src={product.images[0].url} alt={product.title} />
      </ProductImageWrapper>
    </ProductWrapper>
  );
}

Product.propTypes = {
  productData: shape({
    id: number,
    categories: arrayOf(string),
    color: string,
    images: arrayOf(shape({
      url: string,
    })),
    in_stock: string,
    price: string,
    sale_price: string,
    sizes: arrayOf(string),
    title: string,
  }).isRequired,
  handleShoppingCart: func.isRequired,
};
