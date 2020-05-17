import React,{ useState } from 'react';
import Modal from '../Modal/Modal'
import styles from '../../services/style.module.css'
const ImageGalleryItem = ({ url, alt, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles.ImageGalleryItemImage}
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img src={largeImageURL} alt={alt} />
        </Modal>
      )}
    </li>
  );
};


export default ImageGalleryItem;