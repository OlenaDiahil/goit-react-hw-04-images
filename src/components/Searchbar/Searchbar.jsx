import React, { useState } from "react";
import { SearchbarEl, SearchForm, Button, ButtonLabel, Input} from "./Searchbar.styled";

export default function Searchbar (onSubmit) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <SearchbarEl>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarEl>
  );
}