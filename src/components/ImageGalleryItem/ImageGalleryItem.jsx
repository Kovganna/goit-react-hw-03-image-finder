import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <>
      <img
        src={image.webformatURL}
        alt={image.tag}
        className={s.ImageGalleryItem__image}
        onClick={() => {
          openModal(image);
        }}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
