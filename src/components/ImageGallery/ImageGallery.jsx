import  ImageGalleryItem  from "../ImageGalleryItem/ImageGalleryItem"
import {ImageGalleryList} from "./ImageGallery.styled"

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

// export default class ImageGallery extends Component {

//     state = {
//         pictures: null,
//         loading: false,
//     }

//     componentDidUpdate(prevProps, prevState) {

//         const prevName = prevProps.searchQuery;
//         const newName = this.props.searchQuery;

//         if (prevName !== newName) {

//             this.setState({ loading: true })

//          setTimeout(() => {   fetch(`https://pixabay.com/api/?key=29432108-cac2e2e1a5a7f25b3217a8a0e&image_type=photo&orientation=horizontal&safesearch=true&q=${newName}`).then(response => response.json()).then(pictures => this.setState({pictures})).finally( () => this.setState({ loading: false }))},2000)

//         }
//     }
//     render() {

//         return (
//             <>
//                 {/* {!this.state.searchQuery && <div> Enter image name </div>} */}
//                 {this.state.loading && (<h1> Loading </h1>)}

//             {this.state.pictures &&

//             <ul className="gallery">
//             <li className="gallery-item" key="">
//             {this.props.searchQuery}
//             <img src="" alt="" />
//             </li>

//     </ul>}
//             </>

//   );
// }

// }
