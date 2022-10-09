import { Component } from 'react';
import { Modal } from "../Modal/Modal"
import PropTypes from 'prop-types';
import { ImageGalleryItemCard, ImageGalleryItemImage } from "./ImageGalleryItem.styled"


export default class ImageGalleryItem extends Component  {

    state = {
        showModal: false,
    }

// switching modal on and off
    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
  }
  

  componentDidMount() {
      window.addEventListener("keydown", this.onEscapeClick)
     
    }
 
  componentWillUnmount() {
      window.removeEventListener("keydown", this.onEscapeClick)
    
    }

    onEscapeClick = (event) => {

        if (this.state.showModal) {
             if (event.code === "Escape") {
                this.toggleModal();
            }
        }
    }
        
    onBackdropClick = event => {
        console.log("clicked no backdrop")

        if (this.state.showModal) {

            if (event.currentTarget === event.target) {
            this.toggleModal();}
        }
   }
    

    render() {

        return (
        
            <ImageGalleryItemCard key={this.props.index}> 
            <ImageGalleryItemImage src={this.props.webformatURL} alt={this.props.tags} onClick={this.toggleModal} />
           

            {this.state.showModal && (<Modal largeImageURL={this.props.largeImageURL}  tags={this.props.tags}
                            onBackdropClick={this.onBackdropClick} />)}
                    
            </ImageGalleryItemCard>
      
            
        ) 
    }
} 

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

