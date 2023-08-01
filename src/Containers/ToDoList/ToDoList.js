import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ToDoList.module.scss';
import ControlPannel from '../ControlPannel/ControlPannel';
import ToDoItem from '../ToDoItem/ToDoItem';
import filterFunction from '../../Redux/filterFunction';

export default function ToDoList() {
  const allToDoItems = useSelector((state) => state.todo);
  const todoItems = useSelector((state) => filterFunction(state));

  const itemsContainers = todoItems.map((item) => <ToDoItem item={item} key={item.id} />);

  return (
    <div className={styles.todoList}>
      <ul>{itemsContainers}</ul>
      {allToDoItems.length > 0 && <ControlPannel />}
    </div>
  );
}
