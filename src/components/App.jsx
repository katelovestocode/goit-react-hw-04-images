import SearchBar from './SearchBar/SearchBar';
import { fetchImages } from './utils/fetchImages';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from "./Button/Button"
import { WarningMessage } from './App.styled';
import {useState, useEffect} from 'react';


export default function App () {

  const [searchQuery, setsearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [pictures, setPictures] = useState(null);
  const [perPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);

    
  useEffect(() => {
    
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetchImages(searchQuery, page)
      .then(response => {
        if (response) {
          return response;
        } else {
          return Promise.reject(new Error(`There is no picture ${searchQuery}`));
        }
      })
      .then(pictures => {

        const itemsPerPage = pictures.hits.length;
          
        console.log(pictures)

        setPictures(prevPictures => (page === 1 ? pictures.hits : [...prevPictures, ...pictures.hits]));
        setItemsPerPage(itemsPerPage)
      })
        .catch(error => error)
        .finally(() => setIsLoading(false)) 
  }, [page, searchQuery])
  
 
  // setting searchQuery from the SearchBar and passing to the APP
  const handleFormSubmit = value => {

    setsearchQuery(value);
    setPage(1);
  };

  // on click on the button LoadMore page + 1
  const loadMore = () => {

    setPage(prevPage => prevPage + 1)
  };
    
    return (
      <>
        {error && <h3> {error.message}</h3>}

        {isLoading && <Loader />}

        <SearchBar onSubmit={handleFormSubmit} />

        {pictures && (<ImageGallery  pictures={pictures}/> )}    
        
        {itemsPerPage >= perPage && (<Button onClick={loadMore} />)}
        
        {pictures && pictures.length === 0 && searchQuery !== "" &&
          (<WarningMessage> There are no pictures with name `{searchQuery}`. <br/> Please try to enter something else.</WarningMessage>)} 
      </>
    );
  
}



 // componentDidUpdate(_, prevState) {

  //   const prevName = prevState.searchQuery;
  //   const newName = this.state.searchQuery;

  //   const prevPage = prevState.page;
  //   const newPage = this.state.page;

  //   // check if newName or newPage not equal an old one then we are fettching new pictures
  //   if (prevName !== newName || prevPage !== newPage) {
  //     this.setState({ isLoading: true });

  //     //  fetch(`https://pixabay.com/api/?key=29432108-cac2e2e1a5a7f25b3217a8a0e&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${12}&q=${newName}`)

  //     fetchImages(this.state.searchQuery, this.state.page)
  //       .then(response => {
  //         if (response) {
  //           return response;
  //         } else {
  //           return Promise.reject(new Error(`There is no picture ${newName}`));
  //         }
  //       })
  //       .then(pictures => {

  //         const itemsPerPage = pictures.hits.length;
          
  //         console.log(pictures)
         
  //          // if (this.state.page === 1) {
  //         //   this.setState(prevState => ({ pictures: [...pictures.hits], itemsPerPage: itemsPerPage, })) }
  //         // else { this.setState(prevState => ({ pictures: [...prevState.pictures, ...pictures.hits], itemsPerPage: itemsPerPage, })) }

  //         this.setState(prevState => (this.state.page === 1 ? { pictures: pictures.hits, itemsPerPage: itemsPerPage } : { pictures: [...prevState.pictures, ...pictures.hits], itemsPerPage: itemsPerPage, }
  //         ))
  //           .catch(error => this.state.error)
  //           .finally(() => this.setState({ isLoading: false }));
    
  //  })}}
  
