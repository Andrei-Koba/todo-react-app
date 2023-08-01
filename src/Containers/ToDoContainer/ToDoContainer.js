import React from 'react';
import styles from './ToDoContainer.module.scss';
import MainInput from '../../Components/MainInput/MainInput';
import ToDoList from '../ToDoList/ToDoList';

export default function ToDoContainer() {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoHeader}>
        <h1>TODO</h1>
      </div>
      <MainInput />
      <ToDoList />
    </div>
  );
}
