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
  const newProduct = { ...product };
  newProduct.sizes = [...new Set(product.sizes)];
  const inStock = newProduct.in_stock.toLowerCase() === 'yes';

  return (
    <ProductWrapper>
      <ProductTextWrapper>

        <ProductTextTitle>
          { newProduct.title }
        </ProductTextTitle>

        <ProductTextCategory>
          {newProduct.categories.join(', ')}
        </ProductTextCategory>

        <ProductDetailsWrapper>
          <div>
            <ProductDetailLabel>Price:</ProductDetailLabel>
            <ProductTextPrice>{newProduct.price}</ProductTextPrice>
            <ProductTextSalePrice>{newProduct.sale_price}</ProductTextSalePrice>
          </div>
          <div>
            <ProductDetailLabel>Color:</ProductDetailLabel>
            <ProductColor bg-color={newProduct.color} />
          </div>
          <div>
            <ProductDetailLabel>Sizes:</ProductDetailLabel>
            <ProductSizeWapper>
              {newProduct.sizes.map((size, index) => (
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
        <img src={newProduct.images[0].url} alt={newProduct.title} />
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
