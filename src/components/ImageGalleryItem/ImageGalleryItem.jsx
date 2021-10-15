import s from './ImageGalleryItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = () => {
  const id = uuidv4();
  return (
    <>
      <li className={s.ImageGalleryItem} key={id}>
        <img src="" alt="Pictures" className={s.ImageGalleryItem__image} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
