import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import RenderGallery from './RenderGallery/RenderGallery';

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
        <RenderGallery imgItem={this.state.image} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
