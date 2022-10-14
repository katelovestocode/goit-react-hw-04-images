import {useState} from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';


export default function SearchBar ({onSubmit}) {

  const [searchQuery, setsearchQuery] = useState("");
  

  // SearchQuery onChange when typing in Input
  const handleQueryChange = event => {
    
    setsearchQuery(event.currentTarget.value.toLowerCase())
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    // prop that goes to APP, passing current searchQuery to the APP
    onSubmit(searchQuery);

    setsearchQuery("");
  };

    return (
      <Searchbar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearchAlt />
          </SearchFormButton>

          <SearchFormInput
            className="input"
            name="searchQuery"
            value={searchQuery}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }


SearchBar.propTypes = {
onSubmit: PropTypes.func.isRequired,
}