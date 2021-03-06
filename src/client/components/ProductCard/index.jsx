import React from 'react';
import { string, func } from 'prop-types';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  TextCardCategory,
  TextCardTitle,
  TextCardPrice,
  TextCardSalePrice,
} from './atoms';

export default function ProductCard({
  image,
  category,
  title,
  price,
  salesPrice,
  onClick,
}) {
  return (
    <CardWrapper
      role="button"
      onClick={onClick}
    >
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardTextWrapper>
        <TextCardCategory>{category}</TextCardCategory>
        <TextCardTitle>{title}</TextCardTitle>
        <TextCardPrice>{price}</TextCardPrice>
        <TextCardSalePrice>{salesPrice}</TextCardSalePrice>
      </CardTextWrapper>
    </CardWrapper>
  );
}


ProductCard.propTypes = {
  image: string.isRequired,
  category: string.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  salesPrice: string.isRequired,
  onClick: func,
};

ProductCard.defaultProps = {
  onClick: () => null,
};
