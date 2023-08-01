import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './DeleteButton.module.scss';

export default function DeleteButton({ handleClick }) {
  return <input type="button" className={styles.deleteButton} onClick={handleClick} />;
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
