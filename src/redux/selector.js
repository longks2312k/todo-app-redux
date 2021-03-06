import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchFilterChange = (state) => state.filters.search;
export const filtersStatusSelector = (state) => state.filters.status;
export const filtersPrioritiesSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filtersStatusSelector,
  searchFilterChange,
  filtersPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText)
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
