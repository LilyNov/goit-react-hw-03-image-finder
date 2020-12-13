import s from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.ItemList}>
      {images.map((image, index) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          modalImg={image.largeImageURL}
          key={index}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

// индекс в ключ или айди??
