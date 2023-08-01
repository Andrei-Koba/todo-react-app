import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './ToDoCheckbox.module.scss';

export default function ToDoCheckbox({ id, isChecked, handleChange }) {
  return (
    <div>
      <div
        className={`${styles.styledCheckbox} ${isChecked ? styles.checked : styles.unchecked}`}
      />
      <input id={id} type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}

ToDoCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
