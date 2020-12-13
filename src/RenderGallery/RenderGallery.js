import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from '../ImageGallery/ImageGallery';
import imgAPI from '../service/img-api';
import Loader from '../Loader/Loader';
import StatusError from '../StatusError/StatusError';
import Button from '../Button';

export default class RenderGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgItem;
    const nextImg = this.props.imgItem;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg || prevPage !== nextPage) {
      this.setState({ page: 1, status: 'pending' });

      imgAPI
        .fetchImages(nextImg, nextPage)
        .then(images => {
          if (images.total !== 0) {
            this.setState({ images, status: 'resolved' });
            return;
          }
          return Promise.reject(new Error('Invalid request'));
        })

        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status, images, page } = this.state;

    if (status === 'idle') {
      return <p>Please enter your search term</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <StatusError message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images.hits} />
          <Button onClick={this.onClickLoadMore} page={page} />
        </>
      );
    }
  }
}
