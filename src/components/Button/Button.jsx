import { ButtonMore, ButtonContainer } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {

    return (
        <ButtonContainer>
        <ButtonMore type="button" onClick={onClick}>
          Load More
        </ButtonMore>
        </ButtonContainer>)
    

}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}
