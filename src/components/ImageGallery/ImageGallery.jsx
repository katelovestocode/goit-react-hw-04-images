import  ImageGalleryItem  from "../ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"
import PropTypes from 'prop-types';


export const ImageGallery = ({pictures}) => {

    return (
        <ImageGalleryList> 
            {pictures.map((item, index) => {
                return (
                    <ImageGalleryItem key={index} webformatURL={item.webformatURL} tags={item.tags} largeImageURL={item.largeImageURL} />
                )
            })}
        </ImageGalleryList>)
    
}

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.objectOf(PropTypes.shape({
                webformatURL: PropTypes.string.isRequired,
                tags: PropTypes.string.isRequired,
                largeImageURL: PropTypes.string.isRequired,
                key: PropTypes.number.isRequired
            }),)
        }),
    )
}

