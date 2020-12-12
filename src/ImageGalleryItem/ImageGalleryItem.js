import { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgItem;
    const nextImg = this.props.imgItem;
    const KEY = '19029120-3d5d472043b9b4c189da88885';

    if (prevImg !== nextImg) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgItem}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(image => this.setState({ image }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { image, loading } = this.state;
    const { imgItem } = this.props;
    // const item = image.map(item => item.largeImageURL);
    return (
      <>
        {loading && <p>Загружаем...</p>}
        {!imgItem && <p>Введите запрос</p>}
        <ul>
          {image &&
            image.hits.map(function ({ id, webformatURL, largeImageURL }) {
              return (
                <li className={s.ImageGalleryItem} key={id}>
                  <img
                    className={s.ImageGalleryItemImage}
                    src={webformatURL}
                    alt=""
                    width="300"
                  />
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

//   {image && (
// <li>
//   <img src={item} alt="" width="300" />
// </li>
