  
import React from "react";

import Loader from "react-loader-spinner";
import styles from '../../services/style.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const LoaderSection = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  );
};


export default LoaderSection;