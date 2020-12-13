import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    image: '',
  };

  handleFormSubmit = image => {
    this.setState({ image });
  };

  render() {
    return (
      <div>
        <Searchbar getImg={this.handleFormSubmit} />
        <ImageGallery imgItem={this.state.image} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

//  componentDidMount() {
//     this.setState({ loading: true });
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=19029120-3d5d472043b9b4c189da88885&image_type=photo&orientation=horizontal&per_page=12',
//     )
//       .then(response => response.json())
//       .then(image => this.setState({ image }))
//       .finally(() => this.setState({ loading: false }));
//   }
