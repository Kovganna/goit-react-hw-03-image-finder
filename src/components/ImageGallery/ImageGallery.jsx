import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ pictures = [] }) => {
  return (
    <ul className={s.ImageGallery}>
      {pictures.map(picture => (
        <ImageGalleryItem key={picture.key} />
      ))}
    </ul>
  );
};

export default ImageGallery;
