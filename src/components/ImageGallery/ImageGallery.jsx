import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <li className={s.ImageGalleryItem} key={image.id}>
            <ImageGalleryItem openModal={onOpenModal} image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onOpenModal: PropTypes.func,
};
