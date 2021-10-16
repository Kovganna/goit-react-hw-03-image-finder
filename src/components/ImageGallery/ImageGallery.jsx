import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images = [], onOpenModal }) {
  // console.log(images);
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem openModal={onOpenModal} image={image} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
  onOpenModal: PropTypes.func,
};

export default ImageGallery;
