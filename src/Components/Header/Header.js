import React from 'react';
import styles from './Header.module.css';
import Title from '../UI/Title/Title';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Title>Incluir notícia</Title>
    </header>
  );
}

export default Header;
