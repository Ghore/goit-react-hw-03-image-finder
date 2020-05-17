import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import styles from '../../services/style.module.css'
const ImageGallery = ({ gallery }) => {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>
      </>
    );
  };

export default ImageGallery;