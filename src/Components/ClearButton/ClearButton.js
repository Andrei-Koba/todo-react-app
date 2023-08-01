import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './ClearButton.module.scss';

export default function ClearButton({ handleClick }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.clearButton} ${hover ? styles.mouseOn : ''}`}
      type="button"
      onClick={handleClick}
    >
      Clear completed
    </button>
  );
}

ClearButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
