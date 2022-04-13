import styles from './App.module.css';
import UseStorage from './Store/UserContext';
import AddNews from './Pages/AddNews/AddNews';

function App() {
  return (
    <UseStorage>
      <div className={styles.container}>
        <AddNews />
      </div>
    </UseStorage>
  );
}

export default App;
