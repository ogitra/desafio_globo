import React, { createContext, useState } from 'react';
import axios from '../Axios';

export const UserContext = createContext();

function UseStorage({ children }) {
  const [fetchNews, setFetchNews] = useState([]);
  const [inputValue, setInputValue] = useState({ user: '', title: '', content: '' });
  const [editId, setEditId] = useState(false);

  function fetchNewsHandler() {
    const arrNews = [];
    axios.get('/data.json').then((r) => {
      for (const prop in r.data) {
        const news = {
          id: prop,
          user: r.data[prop].user,
          title: r.data[prop].title,
          content: r.data[prop].content,
        };
        arrNews.push(news);
        setInputValue({ user: '', title: '', content: '' });
        setEditId(false);
      }

      return setFetchNews(arrNews);
    });
  }

  function postHandler(body, evt) {
    evt.preventDefault();
    axios.post('/data.json', body).then(fetchNewsHandler);
  }

  function updatePost(id, body, evt) {
    evt.preventDefault();
    axios.put(`/data/${id}.json`, body).then(fetchNewsHandler);
  }

  function deletePost(id) {
    axios.delete(`/data/${id}.json`).then(fetchNewsHandler);
  }

  const value = {
    fetchNews: fetchNews,
    inputValue: inputValue,
    editId: editId,
    setEditId: setEditId,
    setInputValue: setInputValue,
    postHandler: postHandler,
    fetchNewsHandler: fetchNewsHandler,
    updatePost: updatePost,
    deletePost: deletePost,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UseStorage;
