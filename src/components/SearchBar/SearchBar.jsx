import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';


export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  // SearchQuery onChange when typing in Input
  handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return;
    }

    // prop that goes to APP, passing current searchQuery to the APP
    this.props.onSubmit(this.state.searchQuery);

    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearchAlt />
          </SearchFormButton>

          <SearchFormInput
            className="input"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
onSubmit: PropTypes.func.isRequired,
}