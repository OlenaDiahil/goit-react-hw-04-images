import React from 'react';
import { GalleryItem, ImageStyles } from './ImageGalleryItem.styled';

export default function ImageGalleryItem ({ webformatURL, onClick }) {
  return (
    <GalleryItem>
      <ImageStyles src={webformatURL} alt="" onClick={onClick} />
    </GalleryItem>
  );
};