import availableFilters from '../Redux/availableFilters';

const filterKey = 'activeFilter';

export function setFilter(newFilter) {
  localStorage.setItem(filterKey, newFilter);
  return { payload: newFilter };
}

export function getFilter() {
  return localStorage.getItem(filterKey) || availableFilters.all;
}
