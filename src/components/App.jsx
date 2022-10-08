import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
// import ImageGallery from "./ImageGallery/ImageGallery"
import { Button} from './App.styled';
import { fetchImages } from './utils/fetchImages';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';



export default class App extends Component {
  state = {
    isLoading: false,
    pictures: null,
    searchQuery: '',
    error: null,
    page: 1,
    itemsPerPage: 0,
    perPage: 12,
    
    currentPicture: {},
  };

  // componentDidMount() {
  //   this.setState({ loading: true })
  // fetch("https://pixabay.com/api/?key=29432108-cac2e2e1a5a7f25b3217a8a0e&image_type=photo&orientation=horizontal&safesearch=true&q={this.state.searchQuery}").then(response => response.json()).then(pictures => this.setState({pictures})).finally( () => this.setState({ loading: false }))
  // }


  componentDidUpdate(_, prevState) {
    const prevName = prevState.searchQuery;
    const newName = this.state.searchQuery;

    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevName !== newName || prevPage !== newPage) {
      this.setState({ isLoading: true });

      //  fetch(`https://pixabay.com/api/?key=29432108-cac2e2e1a5a7f25b3217a8a0e&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${12}&q=${newName}`)

      fetchImages(this.state.searchQuery, this.state.page)
        .then(response => {
          if (response) {
            return response;
          } else {
            return Promise.reject(new Error(`There is no picture ${newName}`));
          }
        })
        .then(pictures => {

          //const totalPages = Math.ceil(pictures.totalHits / 12);
          const itemsPerPage = pictures.hits.length;
          
          console.log(pictures)

          if (this.state.page === 1) {
            this.setState(prevState => ({pictures: [...pictures.hits], itemsPerPage: itemsPerPage,  })) } else {this.setState(prevState => ({pictures: [...prevState.pictures, ...pictures.hits], itemsPerPage: itemsPerPage, }))} })
        .catch(error => this.state.error)
        .finally(() => this.setState({ isLoading: false }));

      // setTimeout(() => { console.log(this.state.pictures)},2000)
    }
  }


  // setting searchQuery from the SearchBar and passing to the APP
  handleFormSubmit = value => {
    this.setState({ searchQuery: value, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };



  
  // onPictureClickHandle = pictureId => {
  //   const currentPicture = this.state.pictures.find(item => { return item.id === Number(pictureId) });
  //   this.setState({ currentPicture: currentPicture })
    
  // }

  render() {
    return (
      <>
        {this.state.error && <h3> {this.state.error.message}</h3>}

        {this.state.isLoading && <Loader />}

        <SearchBar onSubmit={this.handleFormSubmit} />

        {this.state.pictures && (
          <ImageGallery  pictures={this.state.pictures}/> )}

            {/* {this.state.pictures.map((item, index)=> (
              <ImageGalleryItem key={index}>
                <ImageGalleryItemImage src={item.webformatURL} alt={item.tag} onClick={this.toggleModal} />
              </ImageGalleryItem>
            ))}
             {this.state.showModal && <Modal imageURL={this.state.currentPicture.largeImageURL} tag={this.state.currentPicture.tag} toggleModal={this.toggleModal} isModalOpen={this.showModal} />} */}
          {/* </ImageGallery> */}
        

        
        {this.state.itemsPerPage >= this.state.perPage && (<Button type="button" onClick={this.loadMore}>
          Load More
        </Button>)}
      </>
    );
  }
}

