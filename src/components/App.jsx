import React, { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { AppDiv } from "./App.styled";

export default function App () {
  const [query, setQuery] = useState('');

  const handleFormSubmit = query => {
    setQuery({query});
  };

  return (
    <AppDiv>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery query={query}/>
    </AppDiv>
  );
  
};



