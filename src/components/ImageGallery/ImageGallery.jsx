import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import {fetchImages} from "../../api/img"
import React from "react";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { Gallery } from "./ImageGallery.styled";
import Loader from "components/Loader/Loader";

export default class ImageGallery extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    showModal: false,
    selectedImage: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ images: [], currentPage: 1 }, () => {
        this.fetchImages(); 
      });
    }
  }

  fetchImages = () => {
    const { query } = this.props;
    const { currentPage } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, currentPage) // Передаємо поточне значення currentPage до функції fetchImages
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ selectedImage: largeImageURL, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: '', showModal: false });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;
    const showLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div>
        <Gallery>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onClick={() => this.handleImageClick(largeImageURL)}
            />
          ))}
        </Gallery>
        {isLoading && <Loader />}
        {showLoadMoreButton && <Button onClick={this.fetchImages} />}
        {showModal && <Modal largeImageURL={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

