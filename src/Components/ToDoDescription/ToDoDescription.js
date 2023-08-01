import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './ToDoDescription.module.scss';

export default function ToDoDescription({ isCompleted, text }) {
  return (
    <span className={`${styles.itemText} ${isCompleted ? styles.crossed : undefined}`}>{text}</span>
  );
}

ToDoDescription.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
