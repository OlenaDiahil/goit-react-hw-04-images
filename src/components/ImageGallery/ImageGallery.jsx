import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import {fetchImages} from "../../api/img"
import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { Gallery } from "./ImageGallery.styled";
import Loader from "components/Loader/Loader";

export default function ImageGallery({query}) {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState (1);
  const [showModal, setShowModal] = useState (false);
  const [selectedImage, setSelectedImage] = useState ('');
  const [isLoading, setIsLoading] = useState (false);

  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
    fetchImages();
  }, [query]);

  const fetchImg = () => {

    setIsLoading(true);

    fetchImages(query, currentPage) 
      .then(images => {
        setImages(prevState => [...prevState.images, ...images]);
        setCurrentPage(prevState => prevState.currentPage + 1);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShowModal(false);
  };

  const showLoadMoreButton = images.length > 0 && !isLoading;

  return (
    <div>
      <Gallery>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onClick={() => handleImageClick(largeImageURL)}
          />
        ))}
      </Gallery>
      {isLoading && <Loader />}
      {showLoadMoreButton && <Button onClick={fetchImg} />}
      {showModal && <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
}

