import React, { useEffect } from 'react';
import { Overlay, ModalParam } from './Modal.styled';

export default function Modal ({largeImageURL, onClose}) {
  useEffect (() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [])

  useEffect (() => {
    window.removeEventListener('keydown', handleKeyDown);
  }, [])

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalParam>
        <img src={largeImageURL} alt="" />
      </ModalParam>
    </Overlay>
  );
}

