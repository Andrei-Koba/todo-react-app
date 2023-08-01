import React from 'react';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import ToDoContainer from './Containers/ToDoContainer/ToDoContainer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ToDoContainer />
    </div>
  );
}

export default App;
