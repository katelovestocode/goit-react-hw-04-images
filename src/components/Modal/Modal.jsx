
import {Overlay, ModalWindow } from "./Modal.styled"


export const Modal = ({largeImageURL, tags, onBackdropClick}) => { 

    return (
        <Overlay onClick={onBackdropClick}>
        <ModalWindow>
        <img src={largeImageURL} alt={tags} />
        </ModalWindow>
        </Overlay>
    )
}


