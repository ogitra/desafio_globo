import React, { useEffect, useContext } from 'react';
import styles from './AddNews.module.css';
import Header from '../../Components/Header/Header';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import TextArea from '../../Components/UI/TextArea/TextArea';
import News from '../../Components/News/News';
import { UserContext } from '../../Store/UserContext';

function AddNews() {
  const {
    fetchNewsHandler,
    fetchNews,
    postHandler,
    updatePost,
    deletePost,
    inputValue,
    setInputValue,
    setEditId,
    editId,
  } = useContext(UserContext);

  useEffect(() => {
    fetchNewsHandler();
  }, []);

  function inputValueHandler(value, id) {
    let newValue = { ...inputValue };
    newValue[id] = value;
    setInputValue(newValue);
  }

  function editIdHandler(id) {
    setEditId(id);
    let filterId = fetchNews.filter((item) => {
      return item.id === id;
    });

    let newInput = { ...inputValue };
    newInput.user = filterId[0].user;
    newInput.title = filterId[0].title;
    newInput.content = filterId[0].content;

    setInputValue(newInput);
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <form
            onSubmit={
              editId === false ? (evt) => postHandler(inputValue, evt) : (evt) => updatePost(editId, inputValue, evt)
            }
          >
            <div className={styles.addNewsContainer}>
              <div className={styles.userAndDateContainer}>
                <Input
                  label={'Usuário'}
                  onChange={({ target }) => inputValueHandler(target.value, 'user')}
                  value={inputValue.user}
                  userWidth
                />
              </div>

              <Input
                label={'Manchete'}
                onChange={({ target }) => inputValueHandler(target.value, 'title')}
                value={inputValue.title}
              />
              <TextArea
                label={'Conteúdo'}
                onChange={({ target }) => inputValueHandler(target.value, 'content')}
                value={inputValue.content}
              />

              <Button edit={editId ?? true}>{editId === false ? 'Enviar' : 'Salvar'} </Button>
            </div>
          </form>

          {fetchNews.length === 0 ? (
            <p>Insira uma notícia</p>
          ) : (
            fetchNews.map((item) => {
              return (
                <News
                  title={item.title}
                  content={item.content}
                  user={item.user}
                  key={item.id}
                  onClick={() => editIdHandler(item.id)}
                  onClickDelete={() => deletePost(item.id)}
                ></News>
              );
            })
          )}
        </div>
      </main>
    </>
  );
}

export default AddNews;
