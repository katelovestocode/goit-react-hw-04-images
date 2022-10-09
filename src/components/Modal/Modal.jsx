
import { Overlay, ModalWindow } from "./Modal.styled"
import PropTypes from 'prop-types';


export const Modal = ({largeImageURL, tags, onBackdropClick}) => { 

    return (
        <Overlay onClick={onBackdropClick}>
        <ModalWindow>
        <img src={largeImageURL} alt={tags} />
        </ModalWindow>
        </Overlay>
    )
}

Modal.propTypes = {
tags: PropTypes.string.isRequired,
largeImageURL: PropTypes.string.isRequired,
onBackdropClick: PropTypes.func.isRequired, 
}

