import React from 'react';
import styles from './News.module.css';
import Button from '../UI/Button/Button';

function News({ title, content, user, onClick, onClickDelete }) {
  return (
    <section className={styles.newsContainer}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>
          <strong>por:</strong> {user}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={onClick} edit>
          Editar
        </Button>
        <Button onClick={onClickDelete} del>
          Deletar
        </Button>
      </div>
    </section>
  );
}

export default News;
