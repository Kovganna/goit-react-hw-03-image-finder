import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, image, webformatURL, tag, openModal }) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt={tag} className={s.ImageGalleryItem__image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
