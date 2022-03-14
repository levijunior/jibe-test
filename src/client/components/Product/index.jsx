import React from 'react';
import {
  shape, string, number, arrayOf, func,
} from 'prop-types';
import Title from './Title';
import Category from './Category';
import Details from './Details';
import Image from './Image';
import {
  ProductWrapper,
  ProductTextWrapper,
  AddCartButton,
} from './atoms';

export default function Product({ productData: product, handleShoppingCart }) {
  const newProduct = { ...product };
  newProduct.sizes = [...new Set(product.sizes)];
  const inStock = newProduct.in_stock.toLowerCase() === 'yes';

  return (
    <ProductWrapper>
      <ProductTextWrapper>
        <Title title={newProduct.title} />
        <Category categories={newProduct.categories} />
        <Details product={newProduct} />
        <AddCartButton
          disabled={!inStock}
          onClick={() => handleShoppingCart(product)}
        >
          {inStock ? 'Add to cart' : 'Out of stock'}
        </AddCartButton>
      </ProductTextWrapper>

      <Image images={newProduct.images} title={newProduct.title} />
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
