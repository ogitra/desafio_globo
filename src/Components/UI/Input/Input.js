import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, userWidth, contentHeight, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type='text'
        className={`${styles.input} ${userWidth && styles.userWidth} ${contentHeight && styles.contentHeight}`}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
