import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ label, onChange, value }) => {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.label}>{label}</label>
      <textarea cols='10' rows='5' className={styles.textArea} onChange={onChange} value={value}></textarea>
    </div>
  );
};

export default TextArea;
