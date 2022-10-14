import { Modal } from "../Modal/Modal"
import PropTypes from 'prop-types';
import { ImageGalleryItemCard, ImageGalleryItemImage } from "./ImageGalleryItem.styled"
import {useState, useEffect} from 'react';


export default function ImageGalleryItem ({index, tags, webformatURL, largeImageURL}) {

    const [showModal, setShowModal] = useState(false);

// switching modal on and off
    const toggleModal = () => {
         setShowModal( prevShowModal  =>  !prevShowModal)
  }

   
    useEffect(() => { 
    const onEscapeClick = (event) => {
        if (showModal) {
             if (event.code === "Escape") {
                toggleModal();
            }}}
        
     // componentDidMount()
    window.addEventListener("keydown", onEscapeClick)
        
     // componentWillUnmount()
    return () => {
            window.removeEventListener("keydown", onEscapeClick)
        };
        
    }, [showModal])
    
  

    const onBackdropClick = event => {
        console.log("clicked no backdrop")
        if (showModal) {
            if (event.currentTarget === event.target) {
            toggleModal()}
        }
   }
    

        return (
        
            <ImageGalleryItemCard key={index}> 
                
            <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={toggleModal} />
           
            {showModal && (<Modal largeImageURL={largeImageURL}  tags={tags} onBackdropClick={onBackdropClick} />)}
                    
            </ImageGalleryItemCard>
            
        ) 
    
} 

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

