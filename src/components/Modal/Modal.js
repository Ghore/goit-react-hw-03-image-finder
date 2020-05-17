import React, { useEffect } from "react";
import styles from '../../services/style.module.css'

const Modal = ({ closeModal, children }) => {
  const modalClose = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    closeModal();
  };

  const escModalClose = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", escModalClose);
    return () => {
      window.removeEventListener("keydown", escModalClose);
    };
  });

  return (
    <div className={styles.Overlay} onClick={modalClose}>
      <div className={styles.Modal}>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;