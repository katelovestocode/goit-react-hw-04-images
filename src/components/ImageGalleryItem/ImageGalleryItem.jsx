import { Component } from 'react';
import { ImageGalleryItemCard, ImageGalleryItemImage } from "./ImageGalleryItem.styled"
import {Modal} from "../Modal/Modal"

export default class ImageGalleryItem extends Component  {

    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
        // setTimeout(()=> {console.log(this.state.showModal)}, 3000)
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
            this.toggleModal();
        }
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