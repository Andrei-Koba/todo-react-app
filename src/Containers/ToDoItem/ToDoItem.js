import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import styles from './ToDoItem.module.scss';
import ToDoCheckbox from '../../Components/ToDoCheckbox/ToDoCheckbox';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';
import ToDoDescription from '../../Components/ToDoDescription/ToDoDescription';
import { changeItemStatus, removeItem } from '../../Redux/StateSlices/todoSlice';

export default function ToDoItem({ item }) {
  const [mouseOn, setMouseOn] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(changeItemStatus(item.id));
  };

  const handleDeleteClick = () => {
    dispatch(removeItem(item.id));
  };

  const handleMouseEnter = () => setMouseOn(true);
  const handleMouseLeave = () => setMouseOn(false);

  return (
    <li
      key={item.id}
      className={`${styles.todoItem} ${mouseOn ? styles.mouseOn : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={item.id} className={styles.checkbox}>
        <ToDoCheckbox
          id={item.id}
          isChecked={item.isCompleted}
          handleChange={handleCheckboxChange}
        />
        <ToDoDescription isCompleted={item.isCompleted} text={item.text} />
      </label>
      {mouseOn && <DeleteButton handleClick={handleDeleteClick} />}
    </li>
  );
}

ToDoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};
