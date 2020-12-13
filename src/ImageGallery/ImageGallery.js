import { Component } from 'react';
import s from '../ImageGallery/ImageGallery.module.css';
// import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
    showModal: false,
    activImgIdx: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgItem;
    const nextImg = this.props.imgItem;
    const KEY = '19029120-3d5d472043b9b4c189da88885';

    if (prevImg !== nextImg) {
      this.setState({ loading: true, image: null });
      fetch(
        `https://pixabay.com/api/?q=${nextImg}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Попробуйте еще раз. Запрос ${nextImg} не найден.`),
          );
        })

        .then(image => this.setState({ image }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = evt => {
    console.dir(evt.currentTarget);
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setActiveImgIdx = idx => {
    this.setState({ activOptionIdx: idx });
    console.log(idx);
  };

  render() {
    const { image, loading, error, showModal, activImgIdx } = this.state;
    const { imgItem } = this.props;
    const activImg = imgItem[activImgIdx];

    return (
      <>
        {error && <h1>{error.message}</h1>}
        {loading && <p>Загружаем...</p>}
        {!imgItem && <p>Введите запрос</p>}
        <ul className={s.ItemList} onClick={this.toggleModal}>
          {image &&
            image.hits.map(function ({ id, webformatURL, tags }) {
              return (
                <li className={s.ImageGalleryItem} key={id}>
                  <img
                    className={s.ImageGalleryItemImage}
                    src={webformatURL}
                    alt={tags}
                    width="300"
                  />
                </li>
              );
            })}
        </ul>

        {showModal &&
          image.hits.map((item, idx) => (
            <Modal onClose={this.toggleModal}>
              <img
                key={item.id}
                className={s.ImageGalleryItemImage}
                src={activImg.largeImageURL}
                alt=""
                width="300"
                onClick={() => this.setActiveImgIdx(idx)}
              />
            </Modal>
          ))}
      </>
    );
  }
}

// image.hits.map(function ({ largeImageURL }) {
//               return (

//                 <img
//                   className="{s.ImageGalleryItemImage}"
//                   src={largeImageURL}
//                   alt=""
//                   width="300"
//                 />

//               )
//             }
