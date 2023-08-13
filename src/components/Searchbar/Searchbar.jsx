import React from "react";
import { SearchbarEl, SearchForm, Button, ButtonLabel, Input} from "./Searchbar.styled";

export default class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onSubmit(inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <SearchbarEl>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarEl>
    );
  }
}