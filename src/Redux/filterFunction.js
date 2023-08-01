import availableFilters from './availableFilters';

export default function filterToDos(state) {
  switch (state.activeFilter) {
    case availableFilters.all:
      return state.todo;
    case availableFilters.active:
      return state.todo.filter((item) => !item.isCompleted);
    case availableFilters.completed:
      return state.todo.filter((item) => item.isCompleted);
    default:
      return state.todo;
  }
}
