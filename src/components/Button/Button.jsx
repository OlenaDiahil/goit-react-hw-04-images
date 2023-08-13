import React from 'react';
import { ButtonStyles } from './Button.styled';

export default function Button ({ onClick }) {
  return (
    <ButtonStyles onClick={onClick}>
      Load more
    </ButtonStyles>
  );
};
