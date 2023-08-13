import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./App.styled";

export default class App extends React.Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query, currentPage: 1 });
  };

  render() {
    const { query } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query}/>
      </AppDiv>
    );
  }
};



