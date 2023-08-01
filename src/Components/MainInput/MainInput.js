import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './MainInput.module.scss';
import { addItem } from '../../Redux/StateSlices/todoSlice';

export default function MainInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      const item = {
        text: value,
        isCompleted: false,
      };
      dispatch(addItem(item));
      setValue('');
    }
  };

  return (
    <input
      className={styles.mainInput}
      type="text"
      placeholder="Input your ToDo item and press ENTER"
      onKeyUp={handleEnter}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
