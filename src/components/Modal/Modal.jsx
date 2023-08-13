import React from 'react';
import { Overlay, ModalParam } from './Modal.styled';

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalParam>
          <img src={largeImageURL} alt="" />
        </ModalParam>
      </Overlay>
    );
  }
}
