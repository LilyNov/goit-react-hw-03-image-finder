import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class ImagePendingView extends Component {
  render() {
    return <Loader type="Grid" color="#00BFFF" height={80} width={80} />;
  }
}
