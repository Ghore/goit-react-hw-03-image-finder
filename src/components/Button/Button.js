import React from "react";
import styles from "../../services/style.module.css";

const Button = ({ pageChange }) => {
  return (
    <div className={styles.ButtonWraper}>
      <button type="button" className={styles.Button} onClick={pageChange}>
        Load more
      </button>
    </div>
  );
};

export default Button;
