import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './FilterButton.module.scss';

export default function FilterButton({ name, isChoosen, onChoose }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <button
      className={`${styles.filterButton} ${hover ? styles.mouseOn : ''} ${
        isChoosen ? styles.choosen : ''
      }`}
      type="button"
      name={name}
      onClick={onChoose}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  isChoosen: PropTypes.bool.isRequired,
  onChoose: PropTypes.func.isRequired,
};
