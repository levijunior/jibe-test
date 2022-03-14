import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { ProductImageWrapper } from './atoms';

export default function Image({ images, title }) {
  return (
    <ProductImageWrapper>
      {images.map((img, index) => (
        <div key={img.url}>
          <img
            src={img.url}
            alt={`${title} ${index}`}
          />
        </div>
      ))}
    </ProductImageWrapper>
  );
}

Image.propTypes = {
  images: arrayOf(shape({
    url: string,
  })).isRequired,
  title: string.isRequired,
};
