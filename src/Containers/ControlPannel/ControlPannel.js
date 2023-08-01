import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ControlPannel.module.scss';
import FilterButton from '../../Components/FilterButton/FilterButton';
import ClearButton from '../../Components/ClearButton/ClearButton';
import { updateActiveFilter } from '../../Redux/StateSlices/activeFilterSlice';
import { clearCompletedItems } from '../../Redux/StateSlices/todoSlice';
import availableFilters from '../../Redux/availableFilters';

export default function ControlPannel() {
  const itemsLeft = useSelector((state) => state.todo.length);
  const activeFilter = useSelector((state) => state.activeFilter);
  const dispatch = useDispatch();

  const onFilterChoose = useCallback((event) => {
    dispatch(updateActiveFilter(event.target.name));
  });

  const handleClearButtonClick = useCallback(() => {
    dispatch(clearCompletedItems());
  });

  function isFilterChoosen(name) {
    return name === activeFilter;
  }

  return (
    <div className={styles.controlPannel}>
      <span className={styles.counter}>{`${itemsLeft} items left`}</span>
      <div>
        <FilterButton
          name={availableFilters.all}
          isChoosen={isFilterChoosen(availableFilters.all)}
          onChoose={onFilterChoose}
        />
        <FilterButton
          name={availableFilters.active}
          isChoosen={isFilterChoosen(availableFilters.active)}
          onChoose={onFilterChoose}
        />
        <FilterButton
          name={availableFilters.completed}
          isChoosen={isFilterChoosen(availableFilters.completed)}
          onChoose={onFilterChoose}
        />
      </div>
      <ClearButton handleClick={handleClearButtonClick} />
    </div>
  );
}
