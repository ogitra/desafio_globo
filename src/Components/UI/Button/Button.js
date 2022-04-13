import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, edit, del, onClick }) => {
  return (
    <button className={`${styles.button} ${edit && styles.buttonEdit} ${del && styles.buttonDelete}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
